
--Exercise 1 : Items and customers

--All items, ordered by price (lowest to highest).
select * from items
ORDER BY product_price DESC;

--Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * FROM items
where product_price >=80;

--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
select first_name from customers
ORDER BY first_name ASC
LIMIT 3;

--All last names (no other columns!), in reverse alphabetical order (Z-A)
select last_name from customers
ORDER BY last_name DESC;

--Exercise 2 : dvdrental database

--In the dvdrental database write a query to select all the columns from the “customer” table.
select * FROM customer;

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select concat (first_name, ' ', last_name) as full_name from customer;


--Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select DISTINCT create_date from customer;

--Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer order by first_name ASC;
--Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film-id, title, description, release_year, rental_rate from film order by rental_rate asc;

--Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select address, phone from address where district = 'Texas';

--Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT *from film WHERE film_id = 15 or  film_id = 150;
SELECT * from film WHERE film_id in (15, 150);
--Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table
select film_id, title, description, length, rental_rate from film where title ='alien';
select title from film;
--No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id, title, description, length, rental_rate from film where title like 'titanic';

--Write a query which will find the 10 cheapest movies.
select * from film order by rental_rate asc limit 10;

-- Query to find the next 10 cheapest movies without using LIMIT
select * from film order by rental_rate asc
fetch first 10 rows only

--Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
select first_name, last_name, amount, payment_date from customer c
join payment p on c.customer_id = p.customer_id
order by c.customer_id;

--You need to check your inventory. Write a query to get all the movies which are not in inventory.
select * from film where film_id not in (select film_id from inventory);

--Write a query to find which city is in which country.
select city, country from city c
join country co on c.country_id = co.country_id;

--Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
select customer.customer_id, first_name, last_name, amount, payment_date from customer c
join payment p on c.customer_id = p.customer_id
join staff s on p.staff_id = s.staff_id
order by s.staff_id;