import React from 'react'
// import "./VideoListingCard.css"
import "../Videos.css"
import { Link } from 'react-router-dom'
export default function VideoListingCard({music_img,music_title,music_description}) {
    return (
        <div className='videos-card-div'>
            <div className='videos-Card' >
                <img src={music_img} alt={music_title} />
                <Link to={`/videoDetail/${music_title}`} >
                    <svg stroke="cursrentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="player-Card-logo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path></svg>
                </Link>
                <p className='music-title'>{music_title}</p>
                <div className='date-duration'>
                    <p> {music_description.release_date} </p>
                    <p> {music_description.music_duration} </p>
                </div>
            </div>
        </div>
    )
}
