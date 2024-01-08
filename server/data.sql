DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS comments;

CREATE TABLE users (
    userId SERIAL primary key,
    first VARCHAR NOT NULL CHECK (first != ''),
    last VARCHAR NOT NULL CHECK (last != ''),
    email VARCHAR NOT NULL CHECK (email != '') UNIQUE,
    password VARCHAR NOT NULL CHECK (password != '')
);

-- CREATE TABLE comments(
--     id SERIAL PRIMARY KEY,
--     url VARCHAR NOT NULL,
--     username VARCHAR NOT NULL,
--     title VARCHAR NOT NULL,
--     description TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );