import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5rem",gap:"10px"}}>
        <h1 style={{ color: "white"}}>Erro page not found.</h1>
        <Link to="/">
          <button style={{ padding: "5px 15px" }}>Back to Home Page.</button>
        </Link>
      </div>
    </div>
  )
}
