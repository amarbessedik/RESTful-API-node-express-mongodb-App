const mongoose = require('mongoose');

//Create a Schema
const PostSchema = mongoose.Schema({
  title: {
      type: String,
      required: true,
      trim: true
    },
  description: {
      type: String,
      required: true,
      trim: true
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Posts', PostSchema);