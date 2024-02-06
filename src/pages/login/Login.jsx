import React, { useContext,useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../utils/AuthContexts';

export default function Login() {
  const navigate = useNavigate()
  const { logIn, googleSignIn } = useContext(AuthContext)

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(userData.email, userData.password);
      toast.success("Login Successfully!")
      navigate("/")
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      toast.error(errorCode, errorMessage)
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success(" Signin Successfully!");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      toast.error(errorCode, errorMessage)
    }
  };

  return (
    <div className='login-outer-div'>
      <div className='login-inner-div'>
        <h3 className='txt-login'>LogIn</h3>
        <form>
          <div className='email-div'>
            <label htmlFor="email">Email.</label>
            <input type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }

            />
          </div>
          <div className='password-div'>
            <label htmlFor="password">Password.</label>
            <input type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className='google-login'>
            <input onClick={onLogin} type="button" value="Login" />
            <input onClick={handleGoogleSignIn} type="button" value="SignIn with Google" />
          </div>
        </form>
        <p onClick={() => navigate("/signup")} >Create Your Account</p>
      </div>
    </div>
  )
}
