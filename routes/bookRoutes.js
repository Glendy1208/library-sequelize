const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Route untuk mendapatkan semua buku
router.get('/', bookController.getAllBooks);

// Route untuk mendapatkan buku berdasarkan id
router.get('/:bookId', bookController.getBookById);

// Route untuk mendapatkan semua buku oleh author tertentu
router.get('/author/:authorId', bookController.getBooksByAuthorId);

// Route untuk membuat buku baru
router.post('/', bookController.createBook);

// Route untuk mengupdate buku berdasarkan id
router.put('/:bookId', bookController.updateBook);

// Route untuk menghapus buku berdasarkan id
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;