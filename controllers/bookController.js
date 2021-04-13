const Book = require('../models/book')

module.exports = {
    getBooks: function(req, res) {
        Book.find({})
            .then(books => {res.json(books)})
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },

    createBooks: function(req, res) {
        Book.create(req.body)
            .then(data => {res.json(data)})
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },

    getBook: function(req, res) {
        const { id } = req.params
        Book.findById(id)
            .then(book => {res.json(book)})
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },

    deleteBook: function(req, res) {
        const { id } = req.params
        Book.findByIdAndDelete(id)
            .then(book => {res.json(book)})
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    }
}