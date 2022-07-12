/*this file contains all route handlers for requests to /api*/

//require in express:
const express = require('express');

/*require in controller file here once written: 
const kinokoController = require('../controllers/kinokoController');  */

//initialize express router:
const router = express.Router();

//route handler for GET requests to /api endpoint:
router.get('/', (req, res) => res.status(200).send('candace did a GET!'));

//export router:
module.exports = router;
