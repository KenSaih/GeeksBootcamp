--Exercise1/ DAY3

--1/ Get a list of all the languages, from the language table.
select * from language;
--2/Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select title, description, name from film f
join language l on f.language_id = l.language_id;

--3/Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select title, description, name from film f
join language l on f.language_id = l.language_id
where f.language_id is null;

--4/Create a new table called new_film with the following columns : id, name. Add some new films to the table.

create table new_film (
    id serial primary key,
    name varchar(255)
);

insert into new_film (name) values ('Titanic')('Avatar')('Star Wars')('Ghazial'), ('Harry Potter');

--5/Create a new table called customer_review, which will contain film reviews that customers will make.Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.should have the following columns:review_id – a primary key, non null, auto-increment.film_id – references the new_film table. The film that is being reviewed.language_id – references the language table. What language the review is in.title – the title of the review.score – the rating of the review (1-10).review_text – the text of the review. No limit on the length.last_update – when the review was last updated.

create table customer_review (
    review_id serial primary key,
    film_id int references new_film(id) on delete cascade,
    language_id int references language(language_id),
    title varchar(255),
    score int check (score >= 1 and score <= 10),
    review_text text,
    last_update timestamp default current_timestamp
);

--6/Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review (film_id, language_id, title, score, review_text)
values (1, 1, 'Answome film', 10, 'I really enjoyed this fim. The plot was amazing and the acting was top-notch.'),
       (2, 2, 'Not my cup of tea', 5, 'The movie was okay, but I expected more from it.');

select * from customer_review;

--7/ Delete a film that has a review from the new_film table
delete from new_film where id = 1;

--7/ what happens to the customer_review table? : Output: The review is deleted from the customer_review table because of the ON DELETE CASCADE constraint we set when creating the table. This means that if a film is deleted, all reviews associated with that film will also be deleted automatically.