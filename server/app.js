const express = require('express');
const mongoose = require('mongoose');
const photoRouter = require('./routes/image.route');

// mongoDB config

mongoose.connect('mongodb://localhost:27017/PhotoGalleryDB', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err) {
    console.log('Could not connect to database: ', err.message);
    return;
  }
  console.log('DB connected successfully');
});


const app = express();

// App config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', photoRouter());

app.get('/', (req, res) => {
  res.send('You have reached the home endpoint');
});

app.get('**', (req, res) => {
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('App started on port 8080');
});