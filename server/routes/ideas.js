const router = require('express').Router();
const Idea = require('../models/Idea');

router.route('/').get((req, res) => {
  Idea.find()
    .then((ideas) => res.json(ideas))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { title, body, url } = req.body;

  const newIdea = new Idea({
    title,
    body,
    url,
  });

  newIdea.save()
    .then(() => res.json('Idea added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Idea.findById(req.params.id)
    .then((idea) => res.json(idea))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Idea.findByIdAndDelete(req.params.id)
    .then(() => res.json('Idea deleted.'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
