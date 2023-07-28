import React from 'react'
import BlogCard from '../components/BlogCard'
import { useState, useEffect } from 'react'
import { getBlogs } from '../lib/storeFunc.js'

const Home = () => {

    const [blogs, setBlogs] = useState([])
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogs = await getBlogs()
            setBlogs(blogs)
        }
        fetchBlogs()
        setFetched(true)
    }, [])

  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
        <h1 className="display-5 fw-bold">Blogs Home</h1>
        <hr />
        {
            fetched ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3 p-3">
                    {blogs.map(blog => (
                        <div className="col" key={blog.id}>
                            <BlogCard blog={blog}/>
                        </div>
                    ))}
                </div>
            ) :
            (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Home