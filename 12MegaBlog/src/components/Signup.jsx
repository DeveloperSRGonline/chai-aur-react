import React, { useState } from 'react'
import authService from '../appwrite/auth.service'
import { useNavigate, Link } from 'react-router-dom'
import { login } from "../store/authSlice"
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import './Signup.scss'


const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()

    const signup = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="signup-logo-section">
                    <span className="signup-logo"><Logo width="100%" /></span>
                </div>
                <h2 className="signup-title">Create your account</h2>
                <p className="signup-subtitle">
                    Already have an account?&nbsp;
                    <Link to="/login" className="signin-link">Sign in</Link>
                </p>
                {error && <p className="signup-error">{error}</p>}
                <form className="signup-form" onSubmit={handleSubmit(signup)}>
                    <div className="form-group">
                        <div className="input-wrapper">
                            <Input
                                label="Full Name"
                                placeholder="Full Name"
                                type="text"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                        </div>
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
                                })}
                            />
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
                        <div className="input-wrapper">
                            <Input
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                type="password"
                                {...register("confirmPassword", {
                                    required: true,
                                })}
                            />
                        </div>
                        <Button
                            type='submit'
                            className="signup-button"
                        >Sign up</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup