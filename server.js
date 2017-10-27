const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

var router = require('router.js');

var admin = require("firebase-admin");

var serviceAccount = require("./med-access-firebase-adminsdk-y4y60-2530421c8f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://med-access.firebaseio.com"
});

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'klhcubuibuiinncdj',
  resave: true,
  saveUninitialized: true
}));

app.use(router);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})
