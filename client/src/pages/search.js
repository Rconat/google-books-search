import React, { useState, useEffect } from 'react'
import API from "../utils/API"
import axios from "axios"

// importing components
import BookSearch from '../components/bookSearch'
import Results from '../components/results'

const Search = () => {
    
    const [searchBook, setSearchBook] = useState("The Expanse")
    const [results, setResults] = useState([])


    useEffect(() => {
        fetchBookData()
    }, [])

    const fetchBookData = (e) => {
        axios(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`)
            .then(response => {
                setResults(response.data.items)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        setSearchBook(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchBookData()
    }

    const handleSave = id => {
        const findBook = results.find(response => {
            return response.id === id
        })
    
        const bookData = {
            title: findBook.volumeInfo.title,
            authors: findBook.volumeInfo.authors,
            description: findBook.volumeInfo.description,
            image: findBook.volumeInfo.imageLinks.thumbnail,
            link: findBook.volumeInfo.infoLink,
        }

        API.saveBook(bookData)
    }


    return(
        <>
            <BookSearch 
                handleInputChange={handleInputChange}
                searchBook={searchBook}
                handleSubmit={handleSubmit}
            />
            <div className="results-container container">
                <h2>Results</h2>
                <br/>
                <Results 
                    results={results}
                    handleSave={handleSave}
                />
                <br />
            </div>
        </>
    )
}

export default Search