const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.json([
    {
      id: 1,
      week: '2026-05-21',
      status: 'submitted'
    }
  ]);
});

module.exports = router;