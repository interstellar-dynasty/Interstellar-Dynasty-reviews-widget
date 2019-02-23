
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const request = require('request');
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

app.post('/review', (req, res) => {
  let thumbnail;
  let post = req.body;
  request('https://randomuser.me/api/', function(err, response, body){
  if (err) {
    console.log('error in api request', err)
  } else {
    console.log(req.body)
    let parsedBody = JSON.parse(body)
    thumbnail = parsedBody.results[0].picture.thumbnail
    post.photo = thumbnail;
    post.helpful = 0;
    let review = new db.Review ({
      user_name: req.body.user_name,
      review: req.body.review,
      rating: req.body.rating,
      date: req.body.date,
      helpful: 0,
      photo: thumbnail
    })

    review.save((err, data) => {
      if (err) {
        console.log('error saving to database', err)
      } else {
       res.send(data)
      }
    })
  }
  })
})

app.listen(port, () => {
  console.log('Now listening on port ', port);
})