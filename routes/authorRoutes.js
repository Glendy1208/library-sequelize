const express = require('express');
const authorController = require('../controllers/authorController');

const router = express.Router();

// Route untuk mendapatkan semua authors
router.get('/', authorController.getAllAuthors);

module.exports = router;