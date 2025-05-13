-- Exercise 1: Create a database and two tables
-- 1/ Create a database named "public"
Create database public;
--2/ Add two tables:
-- items
create table items(
product_id int primary key,
product_name varchar(50),
product_price float
);
--customers
create table customers (
costumer_id int primary key,
first_name varchar(50),
last_name varchar(50)
);

--3/ Add the following items to the items table:
insert into items (product_id, product_name, product_price);
values ( 1,'Small Desk', 100)
       ( 2, 'Large desk', 300)
	   ( 3, 'Fan', 80);
--4 / Add 5 new customers to the customers table:
insert into customers (costumer_id,first_name,last_name)
values(1,'Greg','Jones'),
      (2,'Sandra','Jones'),
	  (3,'Scott','Scott'),
	  (4,'Trevor','Green'),
	  (5,'Melanie','Johnson');
--Use SQL to fetch the following data from the database:
--All the items.
select * from items;
--All the items with a price above 80 (80 not included).
select * from items
where product_price > 80;
--All the items with a price below 300. (300 included)
select * from items
where product_price <= 300;
--All customers whose last name is ‘Smith’ (What will be your outcome?).
select * from customers where last_name = 'smith';
--//Outcome//: no rows will be returned because there are no customers with the last name 'Smith'.
--All customers whose last name is ‘Jones’.
select * from customers where last_name = 'Jones';
--All customers whose firstname is not ‘Scott’.
select * from customers where first_name != 'Scott';