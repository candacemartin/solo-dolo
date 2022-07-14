//require in path and express:
const path = require('path');
const express = require('express');

//initialize express app:
const app = express();

//require in router:
const apiRouter = require('./routes/api');

//define server port:
const PORT = 3000;

//parse incoming requests:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include this for serving frontend files:
//handle requests for static html file:
app.get('/', (req, res) => {
  console.log('this is the index page', path.join(__dirname, '../index.html'));
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// app.post('/', (req, res) => {
//   console.log('this is body of post req', req.body);
//   return res.status(200).send('successful post request');
// })

//define route handlers:
app.use('/api', apiRouter);

//catch-all route handler for requests to unknown route:
app.use((req, res) => res.status(404).send("Oops, we can't find that page..."));

//express global error-handler:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = (Object.assign *= ({}, defaultErr, err));
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server:
app.listen(PORT, () => {
  console.log(`candace is listening on ${PORT}`);
});

//export app:
module.exports = app;
