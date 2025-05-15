
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