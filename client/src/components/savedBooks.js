import React from 'react'

// importing styles
import '../css/savedBooks.css'

const SavedBooks = ({ savedBooks, handleDelete }) => {
    return(
        savedBooks.map(response => {
                console.log(response)
            return(
                <div className="saved-books-results container" key={response._id}>
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="book-title">{response.title}</h3>
                            <h4 className="author">{response.authors}</h4>
                        </div>
                        <div className="col-md-3">
                            <button 
                                className="delete-btn"
                                onClick={() => { handleDelete(response._id) }}
                            >Delete</button>
                            <button className="view-btn">
                                <a 
                                    href={response.link} 
                                    target="_blank"
                                    rel="noreferrer"
                                >View </a>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="row data">
                        <div className="col-md-3">
                            <img 
                                src={response.image} 
                                alt={response.title}/>
                        </div>
                        <div className="col-md-9">
                            <p className="book-description">{response.description}</p>
                        </div>
                    </div>
                </div>
            )
            }
        )
    )
}

export default SavedBooks