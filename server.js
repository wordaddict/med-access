const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('firebase-admin');
var serviceAccount = require('');

port = process.ENV.port || port;

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ''
});

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('You are on the homepage');
});

app.get('/login', (req, res) => {
  console.log('You are on the login page');
});

app.get('/signup', (req, res) => {
  console.log('You are on the signup page');
});

var port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})


function isAuthenticated(req, res, next){

};
