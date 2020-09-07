const router = require('express').Router();
const Blog = require('../models/Blog');

router.route('/').get((req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const {
    title, body, date, project,
  } = req.body;

  const newBlog = new Blog({
    title,
    body,
    date,
    project,
  });

  newBlog.save()
    .then(() => res.json('Blog added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog deleted.'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
