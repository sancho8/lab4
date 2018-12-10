const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', async function(req, res, next) {
  const collegesArr = models.College.findAll();
  res.send(collegesArr);
});

router.get('/:id', async function(req, res, next) {
  const collegeObj = models.College.findById(req.params.id);
  res.send(collegeObj);
});


module.exports = router;
