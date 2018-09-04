const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const passport = require('passport');

const router = express.Router();
router.use(bodyParser.json());

router.post('/login', passport.authenticate('local'),
  (req,res) => {
      //id this function gets called authentication was successful.
      //`req.user` containes the authenticated user
      res.redirect('/users/' + req.user.username);
  }  
);
router.post('/signup',(req,res, next) => {
    User.register({username : req.body.username}).then((user) => {
        if(err){
            const err = new Error(`User ${req.body.username} already exists`);
            err.status = 403;
            next(err);
        }
        else{
            return User.create({
                username : req.body.username,
                passowrd : req.body.passowrd
            });
        }
    }).then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            status : 'Registration Successful!',
            user 
        }, (err) => next(err))
        .catch((err) => next(err));
    });
})