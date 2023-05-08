DROP DATABASE IF EXISTS flix_dev;

CREATE DATABASE flix_dev;

\c flix_dev;

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    year YEAR,
    tv_rating VARCHAR(10),
    num_episodes SMALLINT,
    num_seasons SMALLINT,
    cast TEXT,
    star_rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    genre TEXT,
    is_favorite BOOLEAN
);

