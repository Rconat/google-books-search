const router = require('express').Router()

// requiring in bookController to use functions
const bookController = require('../controllers/bookController')

// routes for calls to api
router.route("/api/books")
    .get(bookController.getBooks)
    .post(bookController.createBooks)

router.route('/api/books/:id')
    .get(bookController.getBook)
    .delete(bookController.deleteBook)

module.exports = router
