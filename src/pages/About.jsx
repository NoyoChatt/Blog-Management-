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
        Blog app is a platform which brings out the creative self of our users. It enables them to create an account and gain lifetime free membership. Our users can write their hearts out on our platform in the form of blogs. Blog Buddy realizes that one's blogs are his/her prized possession, hence it gives options to the users to either share it to the general public, keep it within the Blog Buddy circle or keep it entirely private. Blog Buddy does not guarentee if one's blogs adheres to the copyright laws or not and hence, will not be involved incase of copyright breech.
        </p>
    </div>
  )
}

export default About