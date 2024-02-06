import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { videos } from '../../database/videos'
import Video from 'react-player'
import "./VideoDetails.css"
import Seachbar from '../../components/searchbar/Searchbar'
export default function VideoDetails() {
  const { id } = useParams();
  document.title=id

  const songsVideo = videos.find((item) => item.music_title === id);

  let songUrl = songsVideo.music_video;
  let songImg = songsVideo.music_img
  let songType = songsVideo.category_type;
  let likes = songsVideo.likes;
  let movieName = songsVideo.movie_name;
  let views = songsVideo.views;
  let musicTitle = songsVideo.music_title;
  let releaseDate = songsVideo.music_description.release_date;
  let singers = songsVideo.music_description.singers;
  let musicDuration = songsVideo.music_description.music_duration;
  let lyrics = songsVideo.music_description.lyrics_by;
  let composer = songsVideo.music_description.composer;


  const [songs, setSongs] = useState(true)
  const handleClicked = () => {
    setSongs(!songs)
  }
  console.log(songs)
  return (
    <div>
      <Seachbar />
      <div className='outer-parent-div'>
        <div className='listing-outer-div'>
          {
            songs === true ? (
              <div className='thumbnail-outer'>
                <div onClick={handleClicked} className='video-thumbnail'>
                  <img src={songImg} alt="Image" />
                  <svg stroke="cursrentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="player-logo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path></svg>
                </div>
                <div className='video-tools'>
                  <div className='player-1-div'>
                    <svg stroke="cursrentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="player1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path></svg>
                  </div>
                  <div className='song-name'>
                    <h5>
                      {musicTitle} <br />
                      <span> ({movieName})</span>
                    </h5>
                  </div>
                  <div className='likes-views'>
                    <div className='likes-div'>
                      <span>{likes.toLocaleString()}</span>
                      <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-1024.png" width={25} alt="likes" />
                    </div>
                    <div className='views likes-div '>
                      <span> {views}</span>
                      <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/eye-1024.png" width={25} alt="Views" />
                    </div>
                  </div>
                </div>
                <div className='songs-desc'>
                  <div className='inner-songs-div'>
                    <p> Release Date:{releaseDate} </p>
                    <p> Singers:{singers} </p>
                    <p>Music Duration:{musicDuration} </p>
                    <p>Lyrics By:{lyrics}  </p>
                    <p>Composer:{composer}</p>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            !songs ? (
              <Video url={songUrl} controls width={800} />
            ) : null
          }
        </div>
        <div className='related-videos'>
          {videos?.map(({ music_title, music_img, music_description, _id }) => {
            return (
              <div key={_id}>
                <Link to={`/videoDetail/${music_title}`} className='related-side-genre'  >
                  <div className="image-div">
                    <img src={music_img} alt="Image" />
                  </div>
                  <div className="duration-or-dots">
                    <div className="duration-or-title">
                      <h6> {music_title} </h6>
                      <p>{music_description.music_duration} </p>
                    </div>
                    <h5> <svg stroke="currentColor" fill="currentColor"  stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>  </h5>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}
