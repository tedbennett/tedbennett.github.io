const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  project: String,
  body: String,
  date: Date,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
