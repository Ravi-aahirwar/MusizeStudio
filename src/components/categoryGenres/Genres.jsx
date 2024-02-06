import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Genres.css"
export default function Genres({ category, selected, setSelected, id }) {

  const navigate = useNavigate()

  const navigatePage = () => {
    navigate(`/videolisting/${category}`)
  }

  const handleClicked = () => {
    navigatePage();
    setSelected(category)
  }

  return (
    <div>
      <button className={`btn ${category === selected ? "selected" : "btn"}`} onClick={handleClicked}> {category} </button>
    </div>
  )
}
