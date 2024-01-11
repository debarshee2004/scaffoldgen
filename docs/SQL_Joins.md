<div align="center"><h1>SQL-Structured Query Language And JOINS in SQL</h1></div>


## What is SQL?

SQL, which stands for Structured Query Language, is a domain-specific programming language used for managing and manipulating relational databases. It provides a standardized way to interact with relational database management systems (RDBMS) and is widely used for tasks such as querying data, updating data, inserting data, and creating or modifying database schemas.

##### Key components and features of SQL include:

###### 1. Data Query Language (DQL):
SQL includes commands for querying data from a database. The most common DQL command is SELECT, which is used to retrieve data from one or more tables.

###### 2. Data Definition Language (DDL):
DDL commands are used to define, modify, and delete database objects such as tables, indexes, and views. Common DDL commands include CREATE, ALTER, and DROP.

###### 3. Data Manipulation Language (DML):
DML commands are used to manipulate data stored in the database. Common DML commands include INSERT, UPDATE, and DELETE.

###### 4. Data Control Language (DCL):
DCL commands are used to control access to data within the database. Common DCL commands include GRANT and REVOKE, which are used to assign and revoke permissions.

###### 5. Transaction Control Commands:
SQL supports transaction control commands such as COMMIT, ROLLBACK, and SAVEPOINT to manage transactions in a database.

###### 6. Joins and Relationships:
SQL allows for the specification of relationships between tables, and it provides various types of joins (e.g., INNER JOIN, LEFT JOIN) to combine data from multiple tables based on these relationships.

###### 7. Constraints:
SQL supports the use of constraints to enforce rules on data within tables, such as uniqueness, primary key constraints, foreign key constraints, and check constraints.

###### 8. Indexes:
SQL allows the creation of indexes on columns to optimize data retrieval and improve query performance.

###### 9. Stored Procedures and Triggers:
SQL supports the creation of stored procedures and triggers, which are precompiled and stored in the database for improved performance and functionality.

SQL is a declarative language, meaning that users specify what they want to achieve (e.g., querying data), and the database management system determines the most efficient way to accomplish the task. Different relational database management systems (RDBMS), such as MySQL, PostgreSQL, Microsoft SQL Server, and Oracle, implement SQL with some variations, but the core concepts remain largely consistent.


## Why Joins are used?

Joins in SQL are used to combine rows from two or more tables based on a related column between them. 

##### The primary reasons for using joins include:

###### 1. Data Retrieval from Multiple Tables:
When information needed for analysis or reporting is spread across multiple tables, joins allow you to retrieve and consolidate relevant data from these tables into a single result set.

###### 2.Normalization:
In a normalized relational database, data is distributed across multiple tables to minimize redundancy and improve data integrity. Joins are necessary to reconstruct the normalized data into meaningful and complete information.

###### 3.Relationships Between Tables:
Relational databases use relationships between tables to represent connections between entities. Joins enable the retrieval of related data based on the specified relationships, such as primary and foreign key connections.

###### 4.Flexibility in Querying:
Joins provide a flexible way to query data by combining information from different tables dynamically. This flexibility is crucial for complex queries that involve multiple sources of data.

###### 5.Optimizing Database Design:
By organizing data into separate tables based on entities and relationships, database designers can create a more efficient and scalable database structure. Joins help in reconstructing the data when needed without duplicating information.

###### 6.Avoiding Data Redundancy:
Instead of duplicating data across multiple tables, which can lead to redundancy and inconsistency, you can store data in separate tables and use joins to retrieve consolidated information as needed. This approach adheres to the principles of database normalization.

###### 7.Aggregating Data:
Joins are often used in combination with aggregate functions (e.g., COUNT, SUM, AVG) to perform calculations and analysis on data from multiple tables.

###### 8.Enhancing Reporting and Analysis:
For reporting and business intelligence purposes, joins are essential to gather and present comprehensive data that may be distributed across various tables.

###### 9.Complex Queries:
Complex queries involving multiple conditions and criteria often require joins to bring together the necessary data from different tables.

It's important to choose the appropriate type of join based on the desired outcome. The most common join types include INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN), each serving specific purposes in combining data from related tables.


## Explain 7 types of Joins

#### 1.INNER JOIN:
An INNER JOIN returns rows from both tables where there is a match based on the specified condition. Rows from tables that do not meet the condition are excluded from the result set.

###### Example:
SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;

#### 2.LEFT JOIN (or LEFT OUTER JOIN):

A LEFT JOIN returns all rows from the left table and the matching rows from the right table. If there is no match, NULL values are returned for columns from the right table.

###### Example:
SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;

#### 3.RIGHT JOIN (or RIGHT OUTER JOIN):

A RIGHT JOIN returns all rows from the right table and the matching rows from the left table. If there is no match, NULL values are returned for columns from the left table.

###### Example:
SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;

#### 4.FULL JOIN (or FULL OUTER JOIN):

A FULL JOIN returns all rows when there is a match in either the left or right table. If there is no match, NULL values are returned for columns from the table without a match.

###### Example:
SELECT * FROM table1 FULL JOIN table2 ON table1.column = table2.column;

#### 5.CROSS JOIN:

A CROSS JOIN returns the Cartesian product of the two tables, i.e., all possible combinations of rows from both tables. It doesn't use any join condition.

###### Example:
SELECT * FROM table1 CROSS JOIN table2;

#### 6. SELF JOIN:

A SELF JOIN is used to join a table with itself. This is often done when comparing rows within the same table.

###### Example:
SELECT * FROM table1 t1 INNER JOIN table1 t2 ON t1.column = t2.column;

#### 7.LEFT ANTI JOIN :

In Left anti join ,  you can achieve the desired result using a combination of a LEFT JOIN and a WHERE clause. An anti-join retrieves rows from the left table that do not have a match in the right table.

###### Example:
SELECT *
FROM left_table
LEFT JOIN right_table ON left_table.column_name = right_table.column_name
WHERE right_table.column_name IS NULL;

## RIGHT ANTI JOIN:
You can achieve the equivalent of a right anti-join by using a combination of a RIGHT JOIN and a WHERE clause to filter out the matched rows.

###### Example:

SELECT *
FROM left_table
RIGHT JOIN right_table ON left_table.column_name = right_table.column_name
WHERE left_table.column_name IS NULL;

These join types provide flexibility in combining data from multiple tables based on different conditions and requirements. The choice of the appropriate join depends on the specific needs of the query and the relationships between the tables.


## Vien Diagram of SQL Joins:

<img src="Sql joins.jpg">


 ## Take a sample table and write the SQL query and output of each join operation:

 Let's consider two sample tables, employees and departments, to demonstrate the SQL queries and expected outputs for each join operation. The common column between these tables is department_id.

### Example:
 -- Sample 'employees' table
CREATE TABLE employees (
    employee_id INT,
    employee_name VARCHAR(50),
    department_id INT
);

INSERT INTO employees VALUES
(1, 'John', 101),
(2, 'Alice', 102),
(3, 'Bob', 101),
(4, 'Eva', 103),
(5, 'Charlie', 102);

-- Sample 'departments' table
CREATE TABLE departments (
    department_id INT,
    department_name VARCHAR(50)
);

INSERT INTO departments VALUES
(101, 'HR'),
(102, 'IT'),
(103, 'Finance');

####Now, let's write SQL queries for each join operation:

##### 1.INNER JOIN:
SELECT employees.*, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;

###### Output:
employee_id | employee_name | department_id | department_name
------------|----------------|---------------|-----------------
1           | John           | 101           | HR
2           | Alice          | 102           | IT
3           | Bob            | 101           | HR
4           | Eva            | 103           | Finance
5           | Charlie        | 102           | IT


##### 2. LEFT JOIN (or LEFT OUTER JOIN):

SELECT employees.*, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;

###### Output:
employee_id | employee_name | department_id | department_name
------------|----------------|---------------|-----------------
1           | John           | 101           | HR
2           | Alice          | 102           | IT
3           | Bob            | 101           | HR
4           | Eva            | 103           | Finance
5           | Charlie        | 102           | IT


##### 3.RIGHT JOIN (or RIGHT OUTER JOIN):
SELECT employees.*, departments.department_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.department_id;

###### Output:
employee_id | employee_name | department_id | department_name
------------|----------------|---------------|-----------------
1           | John           | 101           | HR
2           | Alice          | 102           | IT
3           | Bob            | 101           | HR
4           | Eva            | 103           | Finance
5           | Charlie        | 102           | IT

##### 4.FULL JOIN (or FULL OUTER JOIN):
SELECT employees.*, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.department_id;

###### Output:
employee_id | employee_name | department_id | department_name
------------|----------------|---------------|-----------------
1           | John           | 101           | HR
2           | Alice          | 102           | IT
3           | Bob            | 101           | HR
4           | Eva            | 103           | Finance
5           | Charlie        | 102           | IT

##### 5. CROSS JOIN:
SELECT employees.*, departments.department_name
FROM employees
CROSS JOIN departments;

###### Output:
employee_id | employee_name | department_id | department_name
------------|----------------|---------------|-----------------
1           | John           | 101           | HR
2           | Alice          | 102           | IT
3           | Bob            | 101           | HR
4           | Eva            | 103           | Finance
5           | Charlie        | 102           | IT
1           | John           | 102           | IT
2           | Alice          | 101           | HR
3           | Bob            | 102           | IT
4           | Eva            | 101           | HR
5           | Charlie        | 103           | Finance

##### 6. SELF JOIN:
SELECT e1.employee_name AS employee1, e2.employee_name AS employee2
FROM employees e1
INNER JOIN employees e2 ON e1.department_id = e2.department_id AND e1.employee_id != e2.employee_id;

###### Output:
employee1 | employee2
-----------|-----------
John      | Bob
Alice     | Charlie
Bob       | John
Charlie   | Alice

##### 7. ANTI JOIN (or ANTI SEMI-JOIN):
SELECT employees.*
FROM employees
WHERE NOT EXISTS (SELECT 1 FROM departments WHERE employees.department_id = departments.department_id);

###### Output:
employee_id | employee_name | department_id
------------|----------------|---------------


These examples illustrate how each join operation combines data from the sample tables based on their relationships. The specific query and output may vary based on the actual data in your tables.

## Conclusion

In conclusion, understanding and effectively utilizing SQL joins are critical skills for database professionals and developers working with relational databases. The various types of joins—INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, CROSS JOIN, SELF JOIN, and ANTI JOIN—provide powerful mechanisms to combine data from different tables based on specified conditions. These operations facilitate data retrieval, normalization, and the creation of flexible and efficient database structures. By mastering SQL joins, users gain the ability to construct complex queries, optimize data analysis, and enhance reporting capabilities. The choice of the appropriate join type depends on the specific requirements of a query and the relationships between tables. Additionally, visualizing join operations through Venn diagrams helps in conceptualizing and illustrating how data is combined, aiding in the comprehension of these fundamental SQL concepts. Overall, SQL joins play a pivotal role in managing and extracting meaningful insights from relational databases.