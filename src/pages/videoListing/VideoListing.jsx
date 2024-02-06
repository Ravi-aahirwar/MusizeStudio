import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Genres from '../../components/categoryGenres/Genres'
import { categories } from '../../database/categories'
import Searchbar from '../../components/searchbar/Searchbar'
import Videos from '../../components/videos/Videos'
import "./VideoListing.css"
export default function VideoListing() {

  const [, { different_genres }] = categories;
  const { id } = useParams()
  document.title = id
  const [selected, setSelected] = useState(id)

  const [query, setQuery] = useState("")
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <Searchbar query={query} handleChange={handleChange} /> <br />
      <div className='genres-div'>
        {different_genres?.map(({ _id, category }) => (
          <Genres
            id={id}
            key={_id}
            category={category}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <Videos selected={selected} query={query} setQuery={setQuery} />
    </div>
  )
}
