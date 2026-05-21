const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// Protected route
router.get('/', auth, (req, res) => {
  res.json([
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'Fractions'
    }
  ]);
});

module.exports = router;