-- Database initialization script for blog-api
-- Run this script to create the database and ports table

-- Create database (uncomment if needed)
-- CREATE DATABASE blog_db;

-- Connect to the database
-- \c blog_db;

-- Create a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_posts_updated_at 
    BEFORE UPDATE ON ports 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO posts (title, content) VALUES 
    ('First Blog Post', 'This is the content of my first blog post. Welcome to our blog platform!'),
    ('Learning Node.js', 'Today I learned about building RESTful APIs with Express and PostgreSQL.'),
    ('Database Design', 'Proper database design is crucial for scalable applications.');

-- Display the created table structure
\d ports;

-- Show sample data
SELECT * FROM ports; 