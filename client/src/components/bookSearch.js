import React from 'react'

// importing styles
import "../css/bookSearch.css"

const BookSearch = () => (
    <div className="book-search container">
        <h2>Book Search</h2>
        <br/>
        <input className="search-form"
            type='text'
            name='bookSearch'
            />
        <br />
        <button type="submit" className = "search-btn">Search</button>
    </div>
)

export default BookSearch