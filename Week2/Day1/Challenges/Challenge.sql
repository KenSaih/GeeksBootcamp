Create database Hollywood;

create table actors(
actor_id int primary key,
first_name varchar (50) not null,
last_name varchar (50) not null,
age date not null,
number_oscars int not null
)

insert into actors (actor_id,first_name, last_name, age, number_oscars)
values (1,'Sandra','Poluk','40',20),
       (2,'Tom','Hanks','60',10),
       (3,'Brad','Pitt','50',5),
       (4,'Angelina','Jolie','45',3),
       (5,'Robert','Pattison','35',1);