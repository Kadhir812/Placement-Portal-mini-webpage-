-- Create a single database for both tables
CREATE DATABASE IF NOT EXISTS Companies;
USE Companies;

-- Create the Companies table
CREATE TABLE IF NOT EXISTS Companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lpa DECIMAL(10, 2) NOT NULL,
    location VARCHAR(255) NOT NULL
);

-- Create the Jobs table, referencing the Companies table
CREATE TABLE IF NOT EXISTS Jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    lpa DECIMAL(10, 2) NOT NULL,
    skills_required TEXT NOT NULL,
    FOREIGN KEY (company_id) REFERENCES Companies(id) ON DELETE CASCADE
);

-- Insert companies into the Companies table
INSERT INTO Companies (name, lpa, location) VALUES
('Google', 150.00, 'Mountain View, CA'),
('Microsoft', 140.00, 'Redmond, WA'),
('Apple', 160.00, 'Cupertino, CA'),
('Amazon', 130.00, 'Seattle, WA'),
('Facebook', 145.00, 'Menlo Park, CA'),
('Netflix', 155.00, 'Los Gatos, CA'),
('Tesla', 170.00, 'Palo Alto, CA'),
('Adobe', 125.00, 'San Jose, CA'),
('IBM', 110.00, 'Armonk, NY'),
('Intel', 120.00, 'Santa Clara, CA'),
('Salesforce', 135.00, 'San Francisco, CA'),
('Twitter', 140.00, 'San Francisco, CA'),
('Uber', 150.00, 'San Francisco, CA'),
('Spotify', 130.00, 'Stockholm, Sweden'),
('Oracle', 120.00, 'Redwood City, CA');

-- Insert jobs into the Jobs table
INSERT INTO Jobs (company_id, title, description, location, lpa, skills_required) VALUES
(1, 'Software Engineer', 'Develop innovative software solutions.', 'Mountain View, CA', 150.00, 'Java, Python, Machine Learning'),
(2, 'Product Manager', 'Drive product strategy and roadmap.', 'Redmond, WA', 140.00, 'Agile, Product Strategy, Jira'),
(3, 'iOS Developer', 'Develop applications for iOS devices.', 'Cupertino, CA', 160.00, 'Swift, Objective-C, iOS Development'),
(4, 'Cloud Engineer', 'Build and manage scalable cloud infrastructure.', 'Seattle, WA', 130.00, 'AWS, Docker, Kubernetes'),
(5, 'Data Scientist', 'Analyze data and create predictive models.', 'Menlo Park, CA', 145.00, 'Python, R, Data Science'),
(6, 'DevOps Engineer', 'Automate infrastructure and deployment pipelines.', 'Los Gatos, CA', 155.00, 'CI/CD, Docker, Jenkins'),
(7, 'Mechanical Engineer', 'Design and test mechanical systems for electric vehicles.', 'Palo Alto, CA', 170.00, 'CAD, SolidWorks, Manufacturing'),
(8, 'UI/UX Designer', 'Create visually appealing and user-friendly designs.', 'San Jose, CA', 125.00, 'Figma, Adobe XD, Design Thinking'),
(9, 'Cybersecurity Analyst', 'Protect systems from security breaches.', 'Armonk, NY', 110.00, 'Security, Networking, Firewall'),
(10, 'Hardware Engineer', 'Design and test microprocessors.', 'Santa Clara, CA', 120.00, 'VHDL, FPGA, Hardware Design'),
(11, 'Salesforce Administrator', 'Manage and customize Salesforce CRM.', 'San Francisco, CA', 135.00, 'Salesforce, CRM, Data Management'),
(12, 'Data Engineer', 'Design and build data pipelines for data analysis.', 'San Francisco, CA', 140.00, 'SQL, ETL, Big Data'),
(13, 'Software Developer', 'Develop software applications for transportation systems.', 'San Francisco, CA', 150.00, 'Java, Node.js, Distributed Systems'),
(14, 'Android Developer', 'Develop Android applications for ride-sharing services.', 'Stockholm, Sweden', 130.00, 'Java, Kotlin, Android SDK'),
(15, 'Cloud Architect', 'Design cloud infrastructure and solutions.', 'Redwood City, CA', 120.00, 'AWS, Azure, Cloud Architecture');
