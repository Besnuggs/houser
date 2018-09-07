require('dotenv').config()
const express = require('express'),
 bodyParser = require('body-parser'),
 massive = require('massive')
 ctrl = require('./controller.js');

const app = express();
app.use(bodyParser.json());

const PORT = 4000;
massive(process.env.DB_CONNECTION)
  .then(db => {
    app.set('db', db)
    app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))
  })