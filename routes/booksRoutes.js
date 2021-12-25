const express = require('express')
const router = express.Router()

const { getBook, getSingleBook, addBook, updateBook, removeBook } = require('../controlers')

// console.log(router)

router.get('/', getBook)

router.get('/:id', getSingleBook)

router.post('/', addBook)

router.put('/:id', updateBook)

router.delete('/:id', removeBook)

module.exports = router