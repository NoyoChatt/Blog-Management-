import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../lib/authFunc.js'

const Navbar = ({isAdmin, isAuthenticated, setIsAdmin, setIsAuthenticated}) => {

  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-3 p-3">
        <div className="container-fluid justify-content-between">
            <Link className="navbar-brand fw-bold" to='/'>Blog App</Link>
            {
                !isAuthenticated ? (
                  <div className="d-flex">
                      <Link className="btn btn-outline-success me-2" to="/login">Login</Link>
                      <Link className="btn btn-outline-warning" to="/register">Register</Link>
                  </div>
                ) :
                (
                  <div className="d-flex">
                    {
                      isAdmin && (
                        <Link className="btn btn-outline-success me-2" to="/create">Create</Link>
                      )
                    }

                      <Link className="btn btn-outline-warning me-2" to="/about">About</Link>
                      <button className="btn btn-outline-danger" onClick={() => {
                        logoutUser()
                        setIsAdmin(false)
                        setIsAuthenticated(false)
                        navigate('/')
                      }}>Logout</button>
                  </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar