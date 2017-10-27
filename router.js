const express = require('express');
const path = require('path');

var router = express.Router();

router.get('/', (req, res) => {
  console.log('You are on the homepage');
});

function isAuthenticated(req, res, next){

};

router.get('/login', (req, res) => {
  console.log('You are on the login page');
});

router.get('/signup', (req, res) => {
  console.log('You are on the signup page');
});
