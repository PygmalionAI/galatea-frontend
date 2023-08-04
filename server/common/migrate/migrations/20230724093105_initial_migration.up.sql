CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- structure of the postgreSQL database
 
-- users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
 
    is_banned BOOLEAN NOT NULL DEFAULT FALSE,
    is_beta_tester BOOLEAN NOT NULL DEFAULT FALSE,
    is_willing_to_pay BOOLEAN NOT NULL DEFAULT FALSE,
 
    last_online TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
-- bots table
CREATE TABLE bots (
    id SERIAL PRIMARY KEY,
 
    NAME VARCHAR(255) NOT NULL,
 
    -- the details of the bot
    description TEXT NOT NULL,
    profile_picture_url TEXT NOT NULL,
    personality TEXT NOT NULL,
 
 
    creator_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    FOREIGN KEY (creator_id) REFERENCES users(id),
);
 
-- chats table
CREATE TABLE chats (
    id SERIAL PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
 
    -- can other users see or branch off of this chat
    is_public_viewable BOOLEAN NOT NULL DEFAULT FALSE,
    is_public_branchable BOOLEAN NOT NULL DEFAULT FALSE,
 
    creator_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    FOREIGN KEY (creator_id) REFERENCES users(id),
);
 
-- branches table
CREATE TABLE branches (
    id SERIAL PRIMARY KEY,
    chat_id INTEGER NOT NULL,
 
    -- the branch that this one branched from
    parent_branch_id INTEGER,
 
    -- inherited from chat
    -- can other users see or branch off of this branch
    is_public_viewable BOOLEAN NOT NULL DEFAULT FALSE,
    is_public_branchable BOOLEAN NOT NULL DEFAULT FALSE,
 
    creator_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    FOREIGN KEY (chat_id) REFERENCES chats(id),
    FOREIGN KEY (creator_id) REFERENCES users(id),
    FOREIGN KEY (parent_branch_id) REFERENCES branches(id),
);
 
-- messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    CONTENT TEXT NOT NULL,
    bot_id INTEGER NULL,
    user_id INTEGER NULL,
    branch_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    FOREIGN KEY (branch_id) REFERENCES branches(id),
    FOREIGN KEY (bot_id) REFERENCES bots(id),
    FOREIGN KEY (creator_id) REFERENCES users(id),
 
    -- check for either having bot_id or user_id
    CHECK (
        (bot_id IS NOT NULL AND user_id IS NULL) OR
        (bot_id IS NULL AND user_id IS NOT NULL)
    )
);
 
-- reports table
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    reported_bot_id INTEGER NOT NULL,
 
    -- the message user sent with the report and the response we sent back
    message_text TEXT NOT NULL,
    response_text TEXT NOT NULL,
 
    -- if this is a follow-up report, this will be the id of the previous report
    previous_report_id INTEGER NULL,
 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    FOREIGN KEY (reported_bot_id) REFERENCES bots(id),
    FOREIGN KEY (previous_report_id) REFERENCES reports(id),
);
 
-- bot ratings table
CREATE TABLE bot_ratings (
    id SERIAL PRIMARY KEY,
    bot_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    message_text TEXT NOT NULL,
 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    FOREIGN KEY (bot_id) REFERENCES bots(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
);