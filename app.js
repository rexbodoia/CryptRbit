const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose // Connect to MongoDB
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

// Set port for app to listen on
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Apply middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(express.static(__dirname + "/public"));

// Set routes
app.use("/api/users", users);
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

//Set up production environment
if (process.env.NODE_ENV ==='production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
