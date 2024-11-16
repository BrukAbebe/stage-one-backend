const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Stage One Backend!',
    serverStatus: 'Server is running successfully!'
  });
});

module.exports = router;
