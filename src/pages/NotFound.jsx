import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3 text-center">
        <h1 className="display-5 fw-bold">404 Not Found</h1>

        <p className="lead">The page you are looking for does not exist.</p>

        <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  )
}

export default NotFound