# this script will create users and database in postgre, that are required for gotrue to work

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE USER supabase_admin LOGIN CREATEROLE CREATEDB REPLICATION BYPASSRLS;
CREATE USER supabase_auth_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION PASSWORD 'devdev';
CREATE SCHEMA IF NOT EXISTS auth AUTHORIZATION supabase_auth_admin;
GRANT CREATE ON DATABASE galatea TO supabase_auth_admin;
ALTER USER supabase_auth_admin SET search_path = 'auth';
