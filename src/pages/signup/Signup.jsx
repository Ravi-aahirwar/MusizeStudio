import React, { useState, useContext } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { AuthContext } from '../../utils/AuthContexts'

export default function Signup() {
  const navigate = useNavigate()
  const { signUp } = useContext(AuthContext)

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });


  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      await signUp(userDetails.email, userDetails.password)
      toast.success("SignUp successfully!");
      navigate("/login")
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage);
    }
  }


  return (
    <div className='signup-outer-div'>
      <div className='signup-inner-div'>
        <h3 className='txt-signup'>Signup</h3>
        <form>
          <div className='email-div'>
            <label htmlFor="email">Email.</label>
            <input type="email"
              required
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }

            />
          </div>
          <div className='password-div'>
            <label htmlFor="password">Password.</label>
            <input type="password"
              required
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }

            />
          </div>
          <div className='signup-btn'>
            <input onClick={handleSubmitSignup} type="button" value="Signup" />
          </div>
        </form>
        <p onClick={() => navigate("/login")}> Already Have an Account</p>
      </div>
    </div>
  )
}
