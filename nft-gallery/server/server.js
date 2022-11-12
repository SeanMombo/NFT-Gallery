// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;
const cors = require('cors');
const { apiRouter } = require('./routes/api');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port: ', PORT);
});