const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// TEMP fake login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // temporary fake user
  if (
    email === 'admin@test.com' &&
    password === '123456'
  ) {
    const token = jwt.sign(
      {
        id: 1,
        role: 'admin'
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    );

    return res.json({
      token,
      user: {
        id: 1,
        name: 'Admin User',
        role: 'admin'
      }
    });
  }

  res.status(401).json({
    error: 'Invalid credentials'
  });
});

module.exports = router;