const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const keys = require('./keys');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const pgClient = new Pool({
	user: keys.pgUser,
	host: keys.pgHost,
	database: keys.pgDatabase,
	password: keys.pgPassword,
	port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

// Creating table for Postgres DB
pgClient
	.query('CREATE TABLE IF NOT EXISTS values (number INT)')
	.catch(err => console.log(err));
