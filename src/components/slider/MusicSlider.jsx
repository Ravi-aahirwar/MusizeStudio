import React from 'react'
import "./MusicSlider.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MusicSlider({ carosel_images }) {

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <div className='outer-slider'>
        <Slider {...settings}>
          <div className="image-one imagesSlider">
            <img src="https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654188649/musing_categories/cs.png" alt="" />
          </div>
          <div className="image-two imagesSlider">
            <img src="https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654188867/musing_categories/evergreen.png" alt="" />
          </div>
          <div className="image-three imagesSlider">
            <img src="https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654188313/musing_categories/lofi.png" alt="" />
          </div>
          <div className="image-four imagesSlider">
            <img src="https://res.cloudinary.com/nj1508/image/upload/t_ms_carousel/v1654189091/musing_categories/oldies.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  )
}
