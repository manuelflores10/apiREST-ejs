const express = require('express');
const router = express.Router();
const Task = require('../model/task');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('../views/taskv', {
    tasks
  });
});

module.exports = router;