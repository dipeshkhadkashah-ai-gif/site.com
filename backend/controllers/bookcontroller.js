const router = require('express').Router()
const Book   = require('../models/bookModel')

// book photographer
exports.bookPhotographer = async(req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json({
            success: true,
            book
        })
    } catch (error) {
        res.status(500).json({
            success: false
        })
        
    }
}

// get all book
exports.getAllBook = async(req, res) => {
   const book = await Book.find();
   if (!book){
    res.send("book chaina")
   } else{
    res.status(200).json({
        book
    })
   }
}

// get a book
exports.getABook = async(req, res)=> {
    const book = await Book.findById(req.params.id)
    if (!book){
        res.send("book chaina")
       } else{
        res.status(200).json({
            book
        })

}    }

// Deleta book
exports.deletebook = async(req, res) => {
    const book = await Book.findById(req.params.id)
    if (!book){
        res.send("book chaina")
       } else{
        await book.remove()
        res.status(200).json({
            message: "book removed!"
        })

} 
}