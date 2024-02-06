import React from 'react'
import "./ArtistGenres.css"
import { useNavigate } from 'react-router-dom'
export default function ArtistGenres({ artistGenres }) {
    const navigate = useNavigate()

    return (
        <div className='artist-outerDiv'>
            {artistGenres.map((items) => {
                return (
                    <div key={items.serial_number} onClick={()=> navigate("/videolisting/All")} className='artist-div-Crad' >
                        <div className='artist-images'>
                            <img src={items.img} alt={items.artist_name} height={50} width={50} />
                        </div>
                        <h5 className='artistName'> {items.artist_name} </h5>
                        <p className='artistDesc'> {items.description} </p>
                    </div>
                )
            })}
        </div>
    )
}
