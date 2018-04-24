'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: "https://geoai.auth0.com/.well-known/jwks.json"
    }),
    audience: '{http://capstonegeoai.com}',
    issuer: '{geoai.auth0.com}',
    algorithms: ['RS256']
});

app.get('/api/fileTest/general',(req, res) => {
  let generalTest = [
  {
    id: 99991,
    fileName: "Image 1"
  },
  {
    id: 99992,
    fileName: "Image 2"
  },
  {
    id: 99993,
    fileName: "Image 3"
  }
  ];
  res.json(generalTest);
})

app.get('/api/fileTest/restricted', authCheck, (req, res) => {
  let restrictTest = [
  {
    id: 88881,
    fileName: "img1"
  },
  {
    id: 88882,
    fileName: "img2"
  },
  {
    id: 88883,
    fileName: "img3"
  }
  ];
  res.json(restrictTest);
})

app.listen(3333);
console.log('Listening on localhost:3333');
