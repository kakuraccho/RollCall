CREATE TYPE user_role AS ENUM ('admin', 'user');

CREATE TABLE IF NOT EXISTS users(
  user_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username        VARCHAR(50) NOT NULL,
  email           VARCHAR(100) UNIQUE NOT NULL,
  password_hashed VARCHAR(255) NOT NULL,
  role            user_role NOT NULL DEFAULT 'user',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
