const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const passport = require('passport');
const routes = require('./routes');
const config = require('./config/')

// dotenv.config({ path: './config/config.env'});
// const tinyMCE_API = process.env.TINY_MCE_API;

// const api = tinyMCE_API;

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snippit');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
