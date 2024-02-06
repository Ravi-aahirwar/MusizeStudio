import React, { useContext, useState } from 'react'
import { categories } from './database/categories'
import Searchbar from './components/searchbar/Searchbar'
import CategoryCard from './components/category/CategoryCard'
import "./App.css"
import MusicSlider from './components/slider/MusicSlider'
import ArtistGenres from './components/artistGenres/ArtistGenres'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './utils/AuthContexts'
export default function App() {
  document.title = "Home Page"

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const showLogin = () => {
    navigate("/login")
  }
  function timOut(){
    setTimeout(showLogin,5000);
  }
  if(user){
    navigate("/")
  }
  else(
    timOut()
  )
  const [, { different_genres }] = categories;

  let artistGenres = categories[2].artists

  const [query, setQuery] = useState("")
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const filterItems = different_genres.filter((data) => data.category.toLocaleLowerCase().indexOf(query.toLowerCase()) !== -1)

  function filteredData(genres, query) {
    let filteredProduct = genres
    if (query) {
      filteredProduct = filterItems
    }
    return filteredProduct.map(({ category, img, description, _id }) => (
      <CategoryCard
        key={_id}
        category={category}
        img={img}
        description={description}
      />
    ))
  }

  const result = filteredData(different_genres, query)

  return (
    <div>
      <Searchbar query={query} handleChange={handleChange} />
      <div className='music-slider' >
        <MusicSlider />
      </div>
      <div className="category">
        <h2>Music & Memories</h2>
        <h4>LET YOUR EMOTIONS FLOW. WE'VE GOT YOU.</h4>
        <div className='category-div'>
          {result.length <= 0 ? (
            <center><h2>Result not found</h2></center>
          ) : (
            result
          )}
        </div>
      </div>
      <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
        <ArtistGenres artistGenres={artistGenres} />
      </div>
    </div>
  )
}
