const { Author } = require('../models');
const response = require('../response'); // Import fungsi response

// Mengambil semua authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    response(200, authors, 'Authors retrieved successfully', res);
  } catch (err) {
    response(500, null, err.message, res);
  }
};

// Export fungsi controller
module.exports = {
  getAllAuthors,
};