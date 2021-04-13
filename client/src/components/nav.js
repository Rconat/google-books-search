import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <h2 className="navbar-brand" href="#">Google Books</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className="nav-link active" aria-current="page" href="#">search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className="nav-link" href="#">saved</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav