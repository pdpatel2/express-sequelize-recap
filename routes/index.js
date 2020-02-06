const express = require('express');
const router = express.Router();

const db = require('../models/database')
const Dog = require('../models/models')

router.get('/dogs', (req, res, next) => {
  // const dogs = await Dog.findAll()
  // res.json(dogs)
  Dog.findAll()
  .then((dogs) => {
    res.json(dogs)
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/dogs/:dogId', async (req, res, next) => {
  try{
    const newDog = await Dog.findById(req.params.dogId)
    res.json(newDog)
  } catch(err) {
    next(err)
  }
})

router.post('/dogs', async (req, res, next) => {
  //wrap in try/catch
  const createdDog = await Dog.create(req.body)
  res.status(200).send({
    message: 'Created dog instance',
    dog: createdDog
  })
})

router.put('/dogs/:id', (req, res, next) => {
  Dog.findById(req.params.id)
  .then((foundDog) => {
    return foundDog.update(req.body)
  })
  .then((updatedDog) => {
    res.json({
      message: 'Updated dog instance',
      dog: updatedDog
    })
    console.log(updatedDog)
  })
})

module.exports = router;
