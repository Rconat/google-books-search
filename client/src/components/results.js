import React from 'react'

// importing styles
import '../css/results.css'

const Results = ({ results, handleSave }) => {
    
    return(
        results.map(response =>
            (   
                <>
                <div className="populated-results container">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="book-title">{response.volumeInfo.title}</h3>
                            <h4 className="author">{response.volumeInfo.authors}</h4>
                        </div>
                        <div className="col-md-3">
                            <button 
                            className="save-btn"
                            onClick= {()=> { handleSave(response.id) }}
                            >Save</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row data">
                        <div className="col-md-2">
                            <img 
                                src={response.volumeInfo.imageLinks.thumbnail} alt={response.volumeInfo.title}
                            />
                        </div>
                        <div className="description col-md-10">
                            <p className="book-description">{response.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
                <br />
                </>
            )
        )
    )
}

export default Results