import React from 'react'
import { mainCaroselData } from './MainCaroselData.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarosel = () => {
    const items = mainCaroselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt="ban"/>)
  return (
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarosel
