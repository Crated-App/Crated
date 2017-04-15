const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/index.html'));
});

module.exports = router;
