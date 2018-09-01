const express = require('express');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const passport = require('passport');

const User = require('../../models/User');
const keys = require('../../config/keys');

const router = express.Router();

// currently not using this route
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    prefs: req.user.prefs
  });
})

router.patch("/prefs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.body);
    const id = req.body.id;
    const prefs = {};
    prefs.coin = req.body.coin;
    prefs.news = req.body.newsSource;
    prefs.exchange = req.body.exchange;
    // console.log(prefs)
    const user = User.findById(id);
    // console.log(user);
    const updated =  User.findOneAndUpdate({_id: id}, {$set:{prefs: prefs}}, {new: true, upsert: true}).then(user => res.json(user));
    // console.log(res.body)


  }
);

// Register route, do we respond with a session token?
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
});

// Login route
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'This user does not exist'});
      }
      
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            console.log(user.prefs);
            const payload = {id: user.id, prefs: user.prefs};

            jsonwebtoken.sign(
              payload,
              keys.secretOrKey,
              {expiresIn: 3600},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              });
          } else {
            return res.status(404).json({password: 'Incorrect password'});
          }
        })
    })
})

module.exports = router;
