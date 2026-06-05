import React from 'react'
import { useDispatch } from "react-redux"
import authService from '../../appwrite/auth.service';
import { logout } from '../../store/authSlice';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const logOutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={logOutHandler}
            className='logout-btn'
        >LogoutButton</button>
    )
}

export default LogoutButton