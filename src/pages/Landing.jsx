import React from 'react'
import ReadingSvg from '/reading.svg'
import { Link } from 'react-router-dom'

const Landing = ({isAuthenticated}) => {
  return (
    <div className="container py-5 my-5 border border-2 rounded-3">
        <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between gap-3">
                <div>
                  <h1 className="display-4 fw-bold">Welcome to Blog App</h1>
                  <p className="lead">Wanna read some blogs? You are at the right place.</p>
                </div>
                <div className="d-flex flex-column flex-column justify-content-between gap-3">
                  {
                    !isAuthenticated ? (
                      <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
                    ) : (
                      <Link to="/home" className="btn btn-primary btn-lg">Head Home</Link>
                    )
                  }
                  <Link to='/about' className="btn btn-outline-primary btn-lg">Learn More</Link>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <img src={ReadingSvg} alt="Reading" className="img-fluid" />
            </div>
        </div>
    </div>
  )
}

export default Landing