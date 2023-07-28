import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Landing from './pages/Landing'
import UserForm from './components/UserForm'
import BlogPage from './pages/BlogPage'
import Home from './pages/Home'
import Create from './pages/Create'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'

import { useState } from 'react'

function App() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <Navbar isAdmin={isAdmin} isAuthenticated={isAuthenticated} setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Landing isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<About />} />
        {
          isAuthenticated && (
            <>
              <Route path="/blog/:id" element={<BlogPage isAdmin={isAdmin} />} />
              <Route path="/home" element={<Home />} />
            </>
          )
        }
        {
          isAdmin && isAuthenticated && (
            <Route path="/create" element={<Create />} />
          )
        }
        {
          !isAuthenticated && (
            <>
              <Route path="/login" element={<UserForm formtype="login" setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<UserForm formtype="register" setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />} />
            </>
          )
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
