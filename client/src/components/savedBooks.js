import React from 'react'

// importing styles
import '../css/savedBooks.css'

const SavedBooks = () => {
    return(
        <div className="saved-books-results container">
            <div className="row">
                <div className="col-md-9">
                    <h3 className="book-title">Book Title</h3>
                    <h4 className="author">Author</h4>
                </div>
                <div className="col-md-3">
                    <button className="delete-btn">Delete</button>
                    <button className="view-btn">View</button>
                </div>
            </div>
            <hr />
            <div className="row data">
                <div className="col-md-3">
                    <img src="https://via.placeholder.com/150" alt="placeholder"/>
                </div>
                <div className="col-md-9">
                    <p className="book-description">Book Description</p>
                </div>
            </div>
        </div>
    )
}

export default SavedBooks