DROP DATABASE IF EXISTS alittle_pepper;
CREATE DATABASE alittle_pepper;

\c alittle_pepper;

-- DROP TABLE IF EXISTS profiles;


CREATE TABLE profiles(
    id SERIAL PRIMARY KEY, 
    uid TEXT NOT NULL,
    name TEXT NOT NULL, 
    picture TEXT,
    cal INTEGER, 
    fat INTEGER,
    carb INTEGER,
    protein INTEGER,
    recipes TEXT
);

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    cal INTEGER, 
    fat INTEGER,
    carb INTEGER,
    protein INTEGER,
    photos TEXT, 
    ingredients TEXT NOT NULL, 
    instructions TEXT NOT NULL
)

CREATE TABLE users_recipes(
    id SERIAL PRIMARY KEY, 
    user_id REFERENCES profiles.uid,
    recipe_id REFERENCES recipes.id
)
