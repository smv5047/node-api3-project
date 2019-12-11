const express = require('express');

const router = express.Router();

const db = require('./userDb')

router.post('/', (req, res) => {
  if(!req.body.name){
    res.status(400).json({errorMessage: "Please provide your name"})
  }

  db.insert(req.body)
    .then(data => {
      return res.status(201).json(data)
    })
    .catch(err => {
      res.status(500).json({errorMessage: "There was an error while saving the post to the database"})})
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  db.get()
    .then(data => {
      return res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({errorMessage: "There was an error while saving the post to the database"})
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
