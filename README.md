# Blog-Management-
This is a simple blog app which allows an admin to create, read and delete blogs. It is publicly available for anyone to read the blogs. It has all variety blogs related to technology and development and can be very much useful for developers.

In frontend it uses ReactJS and Bootstrap for styling. In backend it uses Firebase for authentication and database. It uses Firestore for storing the blogs and Firebase Storage for storing the images. For routing it uses React Router.

## Steps

### initialize the project

- Run `npm create vite@latest` to create a new react project
  
- Run `npm install` to install all dependencies

- Run `npm run dev` to start the development server and you will see the default vite page on `localhost:3000`

- Install necessary dependencies - `npm install firebase react-router-dom bootstrap react-bootstrap`

- Place the favicon files and images in `public` folder and add the following code to `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- Delete `index.css` from `src` folder

- In `main.jsx`, remove the `import './index.css'` line and add `import 'bootstrap/dist/css/bootstrap.min.css'` and `import 'bootstrap/dist/js/bootstrap.bundle.min.js'

- Delete `react.svg from `assets` folder and remove `vite.svg` from `public` folder

- Clean up `App.css` file and just leave this remaining code:

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
```

- Clean up the `App.jsx` file and add the following code:

```jsx
import './App.css'

function App() {

  return (
    <>
      <div className='text-bg-success p-3'>
        <h1>Hello</h1>
      </div>
    </>
  )
}

export default App
```
You will see that bootstrap is working and the text background color is green.

### Creating the raw layout

#### Navbar
- Create a `components` folder in `src` folder and create a `Navbar.jsx` file inside it

- Add the following code to `Navbar.jsx`:

```jsx
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-3 p-3">
        <div className="container-fluid justify-content-between">
            <a className="navbar-brand fw-bold" href="/">Blog App</a>
            <div className="d-flex">
                <a className="btn btn-outline-success me-2" href="/login">Login</a>
                <a className="btn btn-outline-warning" href="/register">Register</a>
            </div>
            <div className="d-flex">
                <a className="btn btn-outline-success me-2" href="/create">Create</a>
                <a className="btn btn-outline-warning me-2" href="/about">About</a>
                <a className="btn btn-outline-danger" href="/logout">Logout</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
```

- Import `Navbar.jsx` in `App.jsx` and add it to the `App` component

#### Landing Page

- Create `pages` folder in `src` folder and create a `Landing.jsx` file inside it
-  Add any svg image to `public` folder which you find suitable for the landing page. Here, I have selected a `reading.svg` image from [undraw](https://undraw.co/illustrations) and added it to `public` folder
- Add the following code to `Landing.jsx`:

```jsx
import React from 'react'
import ReadingSvg from '/reading.svg'

const Landing = () => {
  return (
    <div className="container py-5 my-5 border border-2 rounded-3">
        <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between gap-3">
                <div>
                  <h1 className="display-4 fw-bold">Welcome to Blog App</h1>
                  <p className="lead">Wanna read some blogs? You are at the right place.</p>
                </div>
                <div className="d-flex flex-column flex-column justify-content-between gap-3">
                  <button className="btn btn-primary btn-lg">Get Started</button>
                  <button className="btn btn-outline-primary btn-lg">Learn More</button>
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
```

- Import `Landing.jsx` in `App.jsx` and add it to the `App` component

#### Footer

- Create a `Footer.jsx` file in `components` folder and add the following code to it:

```jsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-3 rounded-3">
        <p className="mb-0 fw-bold">
            Made with 🪄 by Lakshit
        </p>
    </footer>
  )
}

export default Footer
```

- Import `Footer.jsx` in `App.jsx` and add it to the `App` component

#### About Page

- Create a `About.jsx` file in `pages` folder and add the following code to it:

```jsx
import React from 'react'

const About = () => {
  return (
    <div className="container py-5 my-5 border border-2 rounded-3">
        <h1 className="display-4 fw-bold">About</h1>

        <p className="lead">
            This is a simple blog app which allows an admin to create, read and delete blogs. It is publicly available for anyone to read the blogs. It has all variety blogs related to technology and development and can be very much useful for developers.
            <br />
            <br />
            In frontend it uses ReactJS and Bootstrap for styling. In backend it uses Firebase for authentication and database. It uses Firestore for storing the blogs and Firebase Storage for storing the images. For routing it uses React Router.
        </p>

        <h3 className="fw-bold">About the Developer</h3>

        <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore modi explicabo, quis perspiciatis dolorem sint soluta quidem iste molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad, enim modi nulla cum praesentium minima nemo nesciunt eum non.
        </p>
    </div>
  )
}

export default About
```

- Import `About.jsx` in `App.jsx` and add it to the `App` component

#### UserForm

- Create a `UserForm.jsx` file in `components` folder and add the following code to it:

```jsx
import React from 'react'

const UserForm = ({formtype}) => {
  return (
    <div className="w-50 mx-auto p-5 my-5 border border-2 rounded-3">
        <h1 className="display-4 fw-bold">{formtype === 'login' ? 'Login' : 'Register'}</h1>

        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />

                {formtype === 'register' && (
                    <>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" />
                    </>
                )}

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">{formtype === 'login' ? 'Login' : 'Register'}</button>
                    
                    {formtype === 'login' && (
                        <button type="button" className="btn btn-secondary">Not Registered? Register</button>
                    )}

                    {formtype === 'register' && (
                        <button type="button" className="btn btn-secondary">Already Registered? Login</button>
                    )}

                </div>
            </div>
        </form>
    </div>
  )
}

export default UserForm
```

- Import `UserForm.jsx` in `App.jsx` and add it to the `App` component

#### Blog Card

- Create a `BlogCard.jsx` file in `components` folder and add the following code to it:

```jsx
import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{blog.date}</h6>
            <p className="card-text">{blog.content.slice(0,11)}</p>
        </div>
    </div>
  )
}

export default BlogCard
```

- Import `BlogCard.jsx` in `App.jsx` and add it to the `App` component

#### Blog Page

- Create a `Blog.jsx` file in `pages` folder and add the following code to it:

```jsx
import React from 'react'
import DelModal from '../components/DelModal'

const BlogPage = () => {
  return (
    <>
        <DelModal/>
        <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
            <h1 className="display-5 fw-bold">Blog Title</h1>
            <p className="lead fs-6">Date Posted</p>
            <hr className="my-4" />
            <p>Blog Content</p>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delModal">Delete</button>
            </div>
        </div>
    </>
  )
}

export default BlogPage
```

- Import `Blog.jsx` in `App.jsx` and add it to the `App` component

#### Delete Modal

- Create a `DelModal.jsx` file in `components` folder and add the following code to it:

```jsx
import React from 'react'

const DelModal = () => {
  return (
    <div className="modal fade" id="delModal" tabIndex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
        
        <div className="modal-dialog">

            <div className="modal-content">

                <div className="modal-header">
                    <h5 className="modal-title" id="delModalLabel">Delete Blog</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    Are you sure you want to delete this blog?
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DelModal
```

#### Home Page

- Create a `Home.jsx` file in `pages` folder and add the following code to it:

```jsx
import React from 'react'
import BlogCard from '../components/BlogCard'

const Home = () => {
    const blogs = [
        {
            id: 1,
            title: "Blog Title 1",
            content: "Blog Content 1",
            date: "Date Posted 1"
        },
        {
            id: 2,
            title: "Blog Title 2",
            content: "Blog Content 2",
            date: "Date Posted 2"
        },
        {
            id: 3,
            title: "Blog Title 1",
            content: "Blog Content 1",
            date: "Date Posted 1"
        },
        {
            id: 4,
            title: "Blog Title 2",
            content: "Blog Content 2",
            date: "Date Posted 2"
        },
        {
            id: 5,
            title: "Blog Title 1",
            content: "Blog Content 1",
            date: "Date Posted 1"
        },
        {
            id: 6,
            title: "Blog Title 2",
            content: "Blog Content 2",
            date: "Date Posted 2"
        },
    ]
  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
        <h1 className="display-5 fw-bold">Blogs Home</h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3 p-3">
            {blogs.map(blog => (
                <div className="col" key={blog.id}>
                    <BlogCard blog={blog}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home
```

- Import `Home.jsx` in `App.jsx` and add it to the `App` component

#### Create Blog Page

- Create a `Create.jsx` file in `pages` folder and add the following code to it:

```jsx
import React from 'react'

const Create = () => {
  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
        <h1 className="display-5 fw-bold">Create Blog</h1>

        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder='Enter blog title' aria-describedby="titleHelp" />

                <label htmlFor="content" className="form-label mt-2">Content</label>
                <textarea className="form-control" id="content" placeholder='Enter blog content' rows="5"></textarea>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-success">Create Blog</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Create
```

- Import `Create.jsx` in `App.jsx` and add it to the `App` component

#### Not Found Page

- Create a `NotFound.jsx` file in `pages` folder and add the following code to it:

```jsx
import React from 'react'

const NotFound = () => {
  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3 text-center">
        <h1 className="display-5 fw-bold">404 Not Found</h1>

        <p className="lead">The page you are looking for does not exist.</p>

        <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  )
}

export default NotFound
```

- Import `NotFound.jsx` in `App.jsx` and add it to the `App` component

### Routing

- import `BrowserRouter` from `react-router-dom` in `main.js` and wrap the `App` component with it

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- Import `Routes` and `Route` from `react-router-dom` in `App.jsx` and add the following code to it:

```jsx
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

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<UserForm formtype="login" />} />
        <Route path="/register" element={<UserForm formtype="register" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
```

- Go through each created component and page and replace the `a` tags with `Link` tags from `react-router-dom` and the href attribute with `to` attribute. In some places, you may have to replace the `button` tags with `Link` tags as well like in the Login and Register forms. Make sure to import the Link component from `react-router-dom` in each file where you use it.

- `BlogCard.jsx` has some significant changes.
  
  ```jsx
  import React from 'react'
  import { Link } from 'react-router-dom'

  const BlogCard = ({blog}) => {
    return (
      <Link to={`/blog/${blog.id}`} className="card mb-3 text-decoration-none">
          <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{blog.date}</h6>
              <p className="card-text">{blog.content.slice(0,11)}</p>
          </div>
      </Link>
    )
  }

  export default BlogCard
  ```

### State Handling

#### isAdmin State and isAuth State

- Import `useState` from `react` in `App.jsx` and update the code as follows:

```jsx
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
      <Navbar isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
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
              <Route path="/login" element={<UserForm formtype="login" />} />
              <Route path="/register" element={<UserForm formtype="register" />} />
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
```

- Pass the `isAdmin` and `isAuthenticated` states as props to the `Navbar` component in `App.jsx`

- In `Navbar.jsx`, receive the `isAdmin` and `isAuthenticated` props and update the code as follows:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({isAdmin, isAuthenticated}) => {
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
                      <Link className="btn btn-outline-danger" to="/logout">Logout</Link>
                  </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar
```

- In `Landing.jsx`, receive the `isAuthenticated` prop and update the code as follows:

```jsx
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
```

- In `BlogPage.jsx`, receive the `isAdmin` prop and update the code as follows:

```jsx
import React from 'react'
import DelModal from '../components/DelModal'

const BlogPage = ({isAdmin}) => {
  return (
    <>
        <DelModal/>
        <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
            <h1 className="display-5 fw-bold">Blog Title</h1>
            <p className="lead fs-6">Date Posted</p>
            <hr className="my-4" />
            <p>Blog Content</p>
            {
                isAdmin && (
                  <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delModal">Delete</button>
                  </div>
                )
            }
        </div>
    </>
  )
}

export default BlogPage
```

### blogs State

- Import `useState` from `react` in `Home.jsx` and update the code as follows:

```jsx
import React from 'react'
import BlogCard from '../components/BlogCard'
import { useState } from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([])
    const [fetched, setFetched] = useState(false)

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
```

- Import `useState` from `react` in `BlogPage.jsx` and update the code as follows:

```jsx
import React from 'react'
import DelModal from '../components/DelModal'
import { useState } from 'react'

const BlogPage = ({isAdmin}) => {

  const [blog, setBlog] = useState({})
  const [fetched, setFetched] = useState(false)

  return (
    <>
        <DelModal/>
        {
          fetched ? (
            <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
                <h1 className="display-5 fw-bold">{blog.title}</h1>
                <p className="lead fs-6">{blog.date}</p>
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
```

#### Input States

- Import `useState` from `react` in `Create.jsx` and update the code as follows:

```jsx
import React from 'react'
import { useState } from 'react'

const Create = () => {

  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')

  return (
    <div className="container p-2 p-md-5 my-5 border border-2 rounded-3">
        <h1 className="display-5 fw-bold">Create Blog</h1>

        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder='Enter blog title' aria-describedby="titleHelp" onChange={(e) => setBlogTitle(e.target.value)} />

                <label htmlFor="content" className="form-label mt-2">Content</label>
                <textarea className="form-control" id="content" placeholder='Enter blog content' rows="5" onChange={(e) => setBlogContent(e.target.value)}></textarea>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-success">Create Blog</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Create
```

- Import `useState` from `react` in `UserForm.jsx` and update the code as follows:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserForm = ({formtype}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="w-50 mx-auto p-5 my-5 border border-2 rounded-3">
        <h1 className="display-4 fw-bold">{formtype === 'login' ? 'Login' : 'Register'}</h1>

        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />

                {formtype === 'register' && (
                    <>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </>
                )}

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">{formtype === 'login' ? 'Login' : 'Register'}</button>
                    
                    {formtype === 'login' && (
                        <Link type="button" to='/register' className="btn btn-secondary">Not Registered? Register</Link>
                    )}

                    {formtype === 'register' && (
                        <Link type="button" to='/login' className="btn btn-secondary">Already Registered? Login</Link>
                    )}

                </div>
            </div>
        </form>
    </div>
  )
}

export default UserForm
```

### Configuring Firebase

- In the root folder, create a `.env` file and add the following:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
```

- Copy these from your firebase project settings.

- Make sure to add `.env` to `.gitignore` file.

- In `src` folder, create a folder named `firebase` and create a file named `firebase.js` inside it.

- Add the following code to `firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
```

### Authentication Functions

- In `src` folder, create a folder named `lib` and create a file named `authFunc.js` inside it.

- Add the following code to `authFunc.js`:

```js
import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
        return error;
    }
}
```

### Firestore Functions

- In `lib` folder, create a file named `storeFunc.js` and add the following code:

```js
import { firestore } from "../firebase/firebase.js";
import { collection, addDoc, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";

const blogsCollection = collection(firestore, "blogs");

export const getBlogs = async () => {
    try {
        const blogs = await getDocs(blogsCollection);
        return blogs;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getBlog = async (id) => {
    try {
        const blog = await getDoc(doc(firestore, "blogs", id));
        return blog;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const createBlog = async (blog) => {
    try {
        const newBlog = await addDoc(blogsCollection, blog);
        return newBlog;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteBlog = async (id) => {
    try {
        await deleteDoc(doc(firestore, "blogs", id));
    } catch (error) {
        console.log(error);
        return error;
    }
}
```

### Functionalities

- Install 2 packages:
- `npm i email-validator password-validator` to validate email and password.

#### Authentication

- Go to `App.jsx` and update the code. I am providing the full code here:

```jsx
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
```

- In `Navbar.jsx`, update the code. I am providing the full code here:

```jsx
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
```

- In `UserForm.jsx`, update the code. I am providing the full code here:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import emailValidator from 'email-validator'
import passwordValidator from 'password-validator'
import { registerUser,loginUser } from '../lib/authFunc.js'
import { useNavigate } from 'react-router-dom'

const UserForm = ({formtype, setIsAdmin, setIsAuthenticated}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    var schema = new passwordValidator();

    schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .has().symbols()                                // Should have symbols

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(email && password){
            if(!emailValidator.validate(email)){
                setErrorMessage('Invalid Email')
                setTimeout(() => {
                    setErrorMessage('')
                }, 4000)
            }
            else{
                if(formtype === 'register'){
                    if(schema.validate(password)){
                        if(password === confirmPassword){
                            setErrorMessage('')
                            console.log('Register')
                            try{
                                const res = await registerUser(email,password)
                                if(res.email){
                                    setIsAdmin(res.email === 'lcs17@gmail.com')
                                    setIsAuthenticated(true)
                                    navigate('/home')
                                }
                            }
                            catch(err){
                                console.log(err)
                                setErrorMessage(err.message)
                                setTimeout(() => {
                                    setErrorMessage('')
                                }, 4000)
                            }
                        }
                        else{
                            setErrorMessage('Passwords do not match')
                            setTimeout(() => {
                                setErrorMessage('')
                            }, 4000)
                        }
                    }
                    else{
                        setErrorMessage('Password requirements not met')
                        setTimeout(() => {
                            setErrorMessage('')
                        }, 4000)
                    }
                }
                else{
                    if(schema.validate(password)){
                        setErrorMessage('')
                        console.log('Login')
                        try{
                            const res = await loginUser(email,password)
                            if(res.email){
                                setIsAdmin(res.email === 'lcs17@gmail.com')
                                setIsAuthenticated(true)
                                navigate('/home')
                            }
                        }
                        catch(err){
                            console.log(err)
                            setErrorMessage(err.message)
                            setTimeout(() => {
                                setErrorMessage('')
                            }, 4000)
                        }
                    }
                    else{
                        setErrorMessage('Password requirements not met')
                        setTimeout(() => {
                            setErrorMessage('')
                        }, 4000)
                    }
                }
            }
        }
        else{
            setErrorMessage('Please fill all the fields')
            setTimeout(() => {
                setErrorMessage('')
            }, 4000)
        }
    }


  return (
    <div className="container col col-md-6 mx-auto p-3 p-md-5 my-5 border border-2 rounded-3">
        <h1 className="display-4 fw-bold">{formtype === 'login' ? 'Login' : 'Register'}</h1>

        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />

                {formtype === 'register' && (
                    <>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </>
                )}

                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                    </div>
                )}

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{formtype === 'login' ? 'Login' : 'Register'}</button>
                    
                    {formtype === 'login' && (
                        <Link type="button" to='/register' className="btn btn-secondary">Not Registered? Register</Link>
                    )}

                    {formtype === 'register' && (
                        <Link type="button" to='/login' className="btn btn-secondary">Already Registered? Login</Link>
                    )}

                </div>
            </div>
        </form>
    </div>
  )
}

export default UserForm
```

#### DataBase

- In `Home.jsx`, update the code. I am providing the full code here:

```jsx
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
```

- In `BlogCard.jsx`, update the code. I am providing the full code here:

```jsx
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
```

#### Delete Blog

- In `BlogPage.jsx`, update the code. I am providing the full code here:

```jsx
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
```

- In `DelModal.jsx`, update the code. I am providing the full code here:

```jsx
import React from 'react'
import { deleteBlog } from '../lib/storeFunc.js'
import { useNavigate } from 'react-router-dom'

const DelModal = ({id}) => {

    const navigate = useNavigate()
    const handleDelete = async() => {
        try{
            await deleteBlog(id)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className="modal fade" id="delModal" tabIndex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
        
        <div className="modal-dialog">

            <div className="modal-content">

                <div className="modal-header">
                    <h5 className="modal-title" id="delModalLabel">Delete Blog</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    Are you sure you want to delete this blog?
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DelModal
```

#### Create Blog

- In `Create.jsx`, update the code. I am providing the full code here:

```jsx
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
```

## Its Done!✨
