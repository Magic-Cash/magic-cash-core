/**
 * MAGIC CASH DATABASE SECURITY LAYER
 * Implementation of Zero-Trust architecture via PostgreSQL RLS.
 */

-- Enable RLS on all sensitive tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE magic_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE watchlist ENABLE ROW LEVEL SECURITY;

-- POLICY: Users can only manage their own profile data
CREATE POLICY "user_identity_isolation" ON profiles
    FOR ALL USING (auth.uid() = id);

-- SCHEMA: Enhanced User Profiles
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    bio TEXT,
    birth_date DATE,
    avatar_url TEXT,
    pin_hash TEXT, -- Encrypted 6-digit PIN for App Lock
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);