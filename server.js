const express = require('express');

const path = require('path');
const authRouting = require("./server/routing/authRouting.js");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('./server/models/passport');

const app = express();

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

mongoose.connect('mongodb://localhost/reactAuth');

// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure passport and session middleware
app.use(expressSession({
  secret: 'yourSecretHere',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Add the auth routing
app.use("/auth",authRouting);

// Create authentication middleware
var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status('401').send({message: "Unauthorized" });
  }
};  

app.get('/currentuser', ensureAuthenticated, function(req, res) {
  if (req.user) {
    res.send(req.user.username)
  } else {
    res.send(null)  
  }
});


//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})
// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});