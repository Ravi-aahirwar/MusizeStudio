import React from 'react'
import { videos } from '../../database/videos'
import "./Videos.css"
import VideoListingCard from './videoListingCard/VideoListingCard';

export default function Videos({ selected, query }) {

    const filterItems = videos.filter(items => items.music_title.toLocaleString().indexOf(query.toLowerCase()) !== -1)
    function filteredData(video, query, selected) {
        let filteredProducts = video;
        if (query) {
            filteredProducts = filterItems;
        }
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category_type }) => category_type === selected
            )
        }
        return filteredProducts.map(({ _id, music_img, music_title, music_description }) => (
            <VideoListingCard
                key={_id}
                music_img={music_img}
                music_title={music_title}
                music_description={music_description}
            />
        ))
    }

    const result = filteredData(videos, query, selected)
    return (
        <div>
            <div className='video-outer-div'>
                {selected === "All" ? videos.map(({ _id, music_img, music_title, music_description }) => (
                    <VideoListingCard
                        key={_id}
                        music_img={music_img}
                        music_title={music_title}
                        music_description={music_description}
                    />
                )) : (
                    result.length <= 0 ? <h2>Result Not Found</h2> : result
                )}
            </div>
        </div>
    )
}
