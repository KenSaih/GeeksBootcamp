CREATE TABLE M (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);

CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    capital VARCHAR(255),
    flag VARCHAR(255),
    subregion VARCHAR(255),
    population BIGINT
);

select * from countries