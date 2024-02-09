import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar' >
            <div className='other-item'>

                <Link to="/" > Home </Link>

                <Link to="/meals" > Mobile </Link>
                <Link to="ingredients">Electronics</Link>
            </div>
            <div className='login-navbar' >
                <Link to="/login" >Login</Link>
                {/* <Link to="/signup" > Signup</Link> */}
            </div>
        </div>
    )
}
