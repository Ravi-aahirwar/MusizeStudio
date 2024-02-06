import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Searchbar.css"
import logo from '../../assets/logo.svg'
import userImg from '../../assets/user-img.png'
import { toast } from 'react-toastify'
import { AuthContext } from '../../utils/AuthContexts';

export default function Searchbar({ query, handleChange }) {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    toast.success("User Logged out!")
    navigate("/login");
  }
  return (
    <div className='search-outer-div'>
      <Link to="/" className="first-div">
        <img src="http://jellydemos.com/html/musize/assets/images/logo.png" alt="Logo" />
      </Link>
      <div className="second-div">
        <input type="text"
          onChange={handleChange}
          value={query}
          placeholder='Search..' />
      </div>
      <div className="third" >
        <div id='container'>
          <div className="third-div">
            {
              user ? (
                <img src={user.photoURL ? user.photoURL : userImg} alt="user" />
              ) : (
                <img src={userImg} alt="user" />
              )
            }

          </div>
          <div className='logout-div'>
            {user ? (
              <p onClick={handleLogout} >LogOut</p>
            ) : (
              <p onClick={() => navigate("/login")} >Login</p>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
