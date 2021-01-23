const { Schema, model } = require('mongoose');

const photoShema = new Schema({
  imageUrl: {
    type: String,
    required: [1, 'Image path is required']
  }
});

const Photo = model('Photo', photoShema);

module.exports = { Photo };
