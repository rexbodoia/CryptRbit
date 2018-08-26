const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

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

  // Set routes
  app.use('/api/users', users);