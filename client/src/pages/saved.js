import React, { useState, useEffect } from 'react'
import API from "../utils/API"

// importing styles
import "../css/savedBooks.css"

// importing components
import SavedBooks from '../components/savedBooks'

const Saved = () => {
    
    const [savedBooks, setSavedBooks] = useState([])

    const getSavedBooks = () => {
        API.getBooks()
            .then(response => {
                setSavedBooks(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getSavedBooks()
    }, [])

    const handleDelete = (id) => {

        const findBook = savedBooks.find(book => {
            return book._id === id
        })
        console.log("nick", id)
        console.log("Ryan", findBook)
        API.deleteBook(id)
            .then(response => {
                getSavedBooks()
            })
            .catch(err => console.log(err))
    }

    return(
        <>
            <div className="saved-books-container container">
                <h2>Saved Books</h2>
                <br/>
                <SavedBooks 
                savedBooks = {savedBooks}
                handleDelete = {handleDelete}
                />
                <br />
            </div>
        </>
    )
}

export default Saved