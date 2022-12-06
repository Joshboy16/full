import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Logo from "../img/logo.png"

const Navbar = () => {


    const {currentUser, logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <Link to="/">
                <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className="links">
                <Link className='link' to="/">
                    <h6>HOME</h6>
                </Link>
                <Link className='link' to="/?cat=research">
                    <h6>RESEARCH</h6>
                </Link>
                <Link className='link' to="/?cat=poems">
                    <h6>POEMS</h6>
                </Link>
                <Link className='link' to="/about">
                    <h6>ABOUT ME</h6>
                </Link>
                <Link className='link' to="/contact">
                    <h6>CONTACT ME</h6>
                </Link>
              
                <span>{currentUser?.username}</span>
                {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
                <span className='write'>
                    <Link className='link' to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar