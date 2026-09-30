const { Client } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_ESwQ2HPYn7NO@ep-rough-feather-b49h9zgb-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require';

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => {
    console.log('Connected to Neon successfully!');
    return client.query('SELECT version();');
  })
  .then((res) => {
    console.log('PostgreSQL Version:', res.rows[0].version);
    return client.end();
  })
  .catch((err) => {
    console.error('Connection error:', err.message);
  });
