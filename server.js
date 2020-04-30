const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Setup app to use sessions to keep track of user's login status.
app.use(session({ secret: 'crazy monkey', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snippit');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
