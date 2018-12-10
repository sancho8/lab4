const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', async function(req, res, next) {
  const colleges = models.College.findAll();

  res.render('colleges/index', {
    title: 'Colleges',
    data: colleges,
  });
});

router.get('/:id', async function(req, res, next) {
  const college = models.College.findById(req.params.id);

  res.render('colleges/single', {
    title: college.name,
    data: college,
  });
});

module.exports = router;
