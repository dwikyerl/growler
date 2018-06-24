require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const routes = require('./routes');

// Initiate App
const app = express();

const options = {};
if (process.env.DB_USER === 'admin') {
  options.user = process.env.DB_USER;
  options.pass = process.env.DB_PASSWORD;
  options.auth = { authdb: 'admin' };
}

mongoose.connect(process.env.DB_URL, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.err('Could not connect to MongoDB...', err));

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port --> ${server.address().port}`);
});