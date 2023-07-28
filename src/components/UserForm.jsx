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
    .has().not().spaces()   
    .has().symbols()                        // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

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
                                    setIsAdmin(res.email === 'mail.nayanikachatterjee@gmail.com')
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
                                setIsAdmin(res.email === 'mail.nayanikachatterjee@gmail.com')
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