require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const { pid } = process;
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Express sessions for user authentication
app.use(session({
  secret: APP_SECRET,
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: OKTA_DOMAIN,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile'
});

// ExpressOIDC attaches handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/build-a-base",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`PID: ${pid}\n`);
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
