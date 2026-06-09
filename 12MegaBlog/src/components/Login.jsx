import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login as storeLogin } from '../store/authSlice'
import { Button, Logo, Input } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth.service"
import { useForm } from "react-hook-form"
import './Login.scss'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            // if session that means user is logged in
            if (session) {
                // pahele userData getCurrentUser method se hi nikalenge
                const userData = await authService.getCurrentUser()
                // if user data is available then dispatch userData in store's login
                if (userData) dispatch(storeLogin(userData)) // store ke andar status true ho jayega
                // after successful login redirect to home
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-logo-section">
                    <span className="login-logo"><Logo width="100%" /></span>
                </div>
                <h2 className="login-title">Sign in to your account</h2>
                <p className="login-subtitle">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="signup-link">Sign up</Link>
                </p>
                {error && <p className="login-error">{error}</p>}
                <form className="login-form" onSubmit={handleSubmit(login)}>
                    <div className="form-group">
                        <div className="input-wrapper">
                            <Input
                                label="Email"
                                placeholder="Email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email address must be a valid email address",
                                    }
                                })} />
                        </div>
                        <div className="input-wrapper">
                            <Input 
                                label="Password"
                                placeholder="Password"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                        </div>
                        <Button 
                            type='submit'
                            className="login-button"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login