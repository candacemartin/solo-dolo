/*this file contains all route handlers for requests to /api*/

//require in express:
const express = require('express');

//require in controller file: 
const kinokoController = require('../controllers/kinokoController'); 

//initialize express router:
const router = express.Router();

//route handler for GET requests to /api endpoint:
router.get('/', (req, res) => res.status(200).send('candace did a GET!'));

//route handler for POST requests to /api/kinoko endpoint:
router.post('/', (req, res) => {
    console.log('this is body of post req', req.body);
    return res.status(200).send('successful post request');
  }
);

// app.post('/', (req, res) => {
//   console.log('this is body of post req', req.body);
//   return res.status(200).send('successful post request');
// })


//export router:
module.exports = router;
