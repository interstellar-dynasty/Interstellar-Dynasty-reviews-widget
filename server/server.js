
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3031;
const db = require("../db/index.js");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/test', (req, res) => {
  db.queryReviews().then(data => {
      res.send(data)
  })
});


app.listen(port, () => {
  console.log('Now listening on port ', port);
})