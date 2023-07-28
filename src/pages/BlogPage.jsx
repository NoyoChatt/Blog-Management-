import React from 'react'
import DelModal from '../components/DelModal'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBlog } from '../lib/storeFunc.js'

const BlogPage = ({isAdmin}) => {

  const [blog, setBlog] = useState({})
  const [fetched, setFetched] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const fetchBlog = async () => {
      const blogData = await getBlog(id)
      const tmp = blogData.data()
      setBlog(tmp)
    }
    fetchBlog()
    setFetched(true)
  }, [])

  return (
    <>
        {
          fetched ? (
            <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
                {
                  isAdmin && (
                    <DelModal id={id} />
                  )
                }
                <h1 className="display-5 fw-bold">{blog.title}</h1>
                <p className="lead fs-6 fw-bold">
                  {blog.date ? new Date(blog.date.seconds * 1000).toLocaleDateString() : new Date(blog.date).toLocaleDateString()}
                </p>
                <hr className="my-4" />
                <p>{blog.content}</p>
                {
                    isAdmin && (
                      <div className="d-flex justify-content-end">
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delModal">Delete</button>
                      </div>
                    )
                }
            </div>) : (
              <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )
        }
    </>
  )
}

export default BlogPage