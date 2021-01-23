const { Schema, model } = require('mongoose');

// Create photo schema
const photoShema = new Schema({
  imageUrl: {
    type: String,
    required: [1, 'Image path is required']
  }
});

// Create photo model
const Photo = model('Photo', photoShema);

// Export model
module.exports = { Photo };
