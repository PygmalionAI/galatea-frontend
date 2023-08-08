-- users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    username TEXT NOT NULL UNIQUE,

    last_online TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- bots table
CREATE TABLE bots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES users(id),
    
    -- the details of the bot
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    avatar_url TEXT NOT NULL,
    personality TEXT NOT NULL,
 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
-- chats table
CREATE TABLE chats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
DROP TYPE IF EXISTS chat_user;
CREATE TYPE chat_user AS ENUM ('user', 'bot');

-- messages table
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chat_id UUID NOT NULL REFERENCES chats(id),
    user_id UUID NULL REFERENCES users(id),
    bot_id UUID NULL REFERENCES bots(id),

    speaker chat_user NOT NULL,
    
    content TEXT NOT NULL,
 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    -- check for either having bot_id or user_id
    CHECK (
        (bot_id IS NOT NULL AND user_id IS NULL) OR
        (bot_id IS NULL AND user_id IS NOT NULL)
    )
);