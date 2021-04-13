import React from 'react'

// importing styles
import "../css/bookSearch.css"

const BookSearch = ({ handleInputChange, searchBook, handleSubmit }) => {

    return(
        <div className="book-search container">
            <h2>Book Search</h2>
            <br/>
            <input 
                className="search-form"
                type='text'
                name='bookSearch'
                value={searchBook}
                onChange={handleInputChange}
            />

            <br />

            <button 
                className="search-btn"
                type="submit"
                onClick={handleSubmit} 
            >Search</button>
        </div>
    )
}

export default BookSearch