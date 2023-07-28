import React from 'react'
import { useState } from 'react'
import { createBlog } from '../lib/storeFunc.js'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(!blogTitle || !blogContent){
        setErrorMessage('Please fill in all fields')
        setTimeout(() => {
            setErrorMessage('')
        }, 4000)
        return
    }
    const blogObj = {
        title: blogTitle,
        content: blogContent,
        date: new Date()
    }

    try {
      const res = await createBlog(blogObj)
      navigate('/')
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
        <h1 className="display-5 fw-bold">Create Blog</h1>

        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder='Enter blog title' aria-describedby="titleHelp" onChange={(e) => setBlogTitle(e.target.value)} />

                <label htmlFor="content" className="form-label mt-2">Content</label>
                <textarea className="form-control" id="content" placeholder='Enter blog content' rows="5" onChange={(e) => setBlogContent(e.target.value)}></textarea>

                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                    </div>
                )}

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Create Blog</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Create