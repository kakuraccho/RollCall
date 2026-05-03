# DBスキーマ設計書

## `users`
ユーザー情報の保存。管理者,一般ユーザーの管理。
|name|type|restriction|
|---|---|---|
|user_id|UUID|PRIMARY KEY DEFAULT gen_random_uuid()|
|username|VARCHAR(50)|NOT NULL|
|created_at|TIMESTAMPTZ|NOT NULL DEFAULT CURRENT_TIMESTAMP|
|email|VARCHAR(100)|UNIQUE, NOT NULL|
|password_hashed|VARCHAR(255)|NOT NULL|
|role|user_role|NOT NULL DEFAULT 'user'|

DB作成時に必要な作業
- roleのenumtypeの作成
`CREATE TYPE user_role AS ENUM ('admin', 'user');`

## `rotation`
基本となるローテーションの管理。 

## `assignments`
欠席等による順番変更の管理。
