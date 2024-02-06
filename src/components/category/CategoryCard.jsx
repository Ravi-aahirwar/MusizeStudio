import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./CategoryCard.css"
export default function CategoryCard({category,img,description}) {


  return (
    <div className='category-Card-div'>
        <Link to={`/videolisting/${category}`}  className="category-Card">
          <img src={img} alt={category}/>
          <p className='category-text'> {category} </p>
          <p className='category-desc'> {description} </p>
        </Link>
    </div>
  )
}
