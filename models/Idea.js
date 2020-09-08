const mongoose = require('mongoose');

const { Schema } = mongoose;

const ideaSchema = new Schema({
  title: String,
  body: String,
  url: String,
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
