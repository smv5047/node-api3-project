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
  db.getById(req.params.id)
    .then(data => {
      console.log(data)
      if(!data){
        return res.status(404).json({errorMessage: "User Does Not Exist"})
      }
      return res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({errorMessage: "The User Information Does Not Exist"})
    })
});

router.get('/:id/posts', (req, res) => {
  db.getUserPosts(req.params.id)
    .then(data => {
      console.log(data)
      if(data.length === 0) {
        return res.status(404).json({errorMessage: "User Does Not Exist or Has No Posts"})
      }
      return res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({errorMessage: "The User Information Does Not Exist"})
    })
});

router.delete('/:id', (req, res) => {
  db.getById(req.params.id)
    .then(data => {
      if (!data){
        return res.status(404).json({errorMessage: "User Does Not Exist"})
      }
       return db.remove(req.params.id).then(()=>data)
    })
    .then(data => {
      return res.json(data)
    })
    .catch(err =>{
      res.status(500).json({errorMessage: "There was an error while deleting the user from the database"})
    })
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
