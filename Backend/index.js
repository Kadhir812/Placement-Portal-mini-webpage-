const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Immunoglobin@812',
  database: 'Companies'
};

// GET route: Fetch all companies
app.get('/companies/search', async (req, res) => {
  const { name } = req.query;
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM Companies WHERE name LIKE ?', [`%${name}%`]);
    res.json(rows);
    connection.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route: Add a new company
app.post('/companies', async (req, res) => {
  const { name, lpa, location } = req.body;
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('INSERT INTO companies (name, lpa, location) VALUES (?, ?, ?)', [name, lpa, location]);
    res.json({ id: result.insertId, name, lpa, location });
    connection.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route: Fetch all jobs or filter jobs by skills, LPA, or title
app.get('/jobs', async (req, res) => {
  const { skill, sort } = req.query;
  let query = 'SELECT Jobs.*, Companies.name as company_name FROM Jobs INNER JOIN Companies ON Jobs.company_id = Companies.id WHERE 1=1';
  const queryParams = [];

  if (skill) {
    query += ' AND Jobs.skills_required LIKE ?';
    queryParams.push(`%${skill}%`);
  }

  if (sort) {
    if (sort === 'alphabetical') {
      query += ' ORDER BY Jobs.title ASC';
    } else if (sort === 'lpa') {
      query += ' ORDER BY Jobs.lpa DESC';
    }
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(query, queryParams);
    res.json(rows);
    connection.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route: Add a new job
app.post('/jobs', async (req, res) => {
  const { company_id, title, description, location, lpa, skills_required } = req.body;
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('INSERT INTO Jobs (company_id, title, description, location, lpa, skills_required) VALUES (?, ?, ?, ?, ?, ?)', [company_id, title, description, location, lpa, skills_required]);
    res.json({ id: result.insertId, company_id, title, description, location, lpa, skills_required });
    connection.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route: Fetch all unique skills
app.get('/skills', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT DISTINCT skills_required FROM Jobs');
    // Extract skills from the rows
    const skills = rows.flatMap(row => row.skills_required.split(',')).map(skill => skill.trim());
    res.json([...new Set(skills)]); // Remove duplicates
    connection.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
