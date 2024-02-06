import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VideoListing from './pages/videoListing/VideoListing.jsx'
import VideoDetails from './pages/videodetails/VideoDetails.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import ErrorPage from './pages/error/ErrorPage.jsx'
import AuthProvider from './utils/AuthContexts.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/videolisting/:id' element={<VideoListing />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/videoDetail/:id' element={<VideoDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        </BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </AuthProvider>
  </React.StrictMode>,
)
