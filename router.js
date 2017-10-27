const express = require('express');
const path = require('path');

var router = express.Router();

app.get('/', (req, res) => {
  console.log('You are on the homepage');
});

function isAuthenticated(req, res, next){

};

app.get('/login', (req, res) => {
  console.log('You are on the login page');
});

app.get('/signup', (req, res) => {
  console.log('You are on the signup page');
});
