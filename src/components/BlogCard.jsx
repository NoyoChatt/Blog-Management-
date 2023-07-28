import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <Link to={`/blog/${blog.id}`} className="card mb-3 text-decoration-none">
        <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {blog.date ? new Date(blog.date.seconds * 1000).toLocaleDateString() : new Date(blog.date).toLocaleDateString()}
            </h6>
            <p className="card-text">{blog.content.slice(0,11)}</p>
        </div>
    </Link>
  )
}

export default BlogCard