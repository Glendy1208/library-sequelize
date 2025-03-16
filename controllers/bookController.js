const { Book } = require('../models');
const response = require('../response');

// Mendapatkan semua buku
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    response(200, books, 'Books retrieved successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

// create book
const createBook = async (req, res) => {
  console.log(req.body);
  try {
    const { title, author_id, description, publish_date} = req.body;
    const book = await Book.create({ title, author_id, description, publish_date });
    response(201, book, 'Book created successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

// Mendapatkan buku berdasarkan id
const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findByPk(bookId, {
      include: 'author'
    });

    if (!book) {
      return response(404, null, 'Book not found', res);
    }

    response(200, book, 'Book retrieved successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

// Update buku berdasarkan id
const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { title, author_id, description, publish_date } = req.body;

    const book = await Book.findByPk(bookId);

    if (!book) {
      return response(404, null, 'Book not found', res);
    }

    book.title = title;
    book.author_id = author_id;
    book.description = description;
    book.publish_date = publish_date;

    await book.save();

    response(200, book, 'Book updated successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

// delete book by id
const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return response(404, null, 'Book not found', res);
    }

    await book.destroy();

    response(200, book, 'Book deleted successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

// Mendapatkan semua buku oleh author tertentu
const getBooksByAuthorId = async (req, res) => {
  try {
    const { authorId } = req.params;
    const books = await Book.findAll({
      where: { author_id: authorId },
      include: 'author'
    });

    if (books.length === 0) {
      return response(404, null, 'No books found for this author', res);
    }

    response(200, books, 'Books retrieved successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

module.exports = {
  getAllBooks,
  getBooksByAuthorId,
  createBook,
  getBookById,
  updateBook,
  deleteBook
};