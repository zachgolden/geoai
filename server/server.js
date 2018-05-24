/*
Zach Golden
Capstone 2018
Backend express endpoint to handle calls to Auth0.
Commented portion at the end is for PredictTest component 
*/
'use strict';
const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');
//for file backup
//const fileUpload = require('express-fileupload');

// view engine setup for file upload backup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// UPLOAD BACKUP ONLY
// if using file upload backup use
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(fileUpload());

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

//TESTING for serving restricted auth0 via API
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

// connect to mongoose
mongoose.connect(config.db);

/** Seting to accept CORS */
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(logger('dev'));

// Put all API endpoints under '/api'
app.use('/api', require('./routes/file'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


/*/file upload predict backup TEST ONLY
app.use('/public', express.static(__dirname + '/public'));
app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})
*/

const port = process.env.PORT || 3333
var serve = app.listen(port);
console.log('Listening on localhost:3333');
module.exports = serve;
