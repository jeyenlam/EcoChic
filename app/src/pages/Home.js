import React from 'react'
import Navbar from '../components/Navbar'
import graphic from '../pictures/SUSTAINABLE_THROUGH_QUALITY.png'
import StoreWidget from '../components/StoreWidget.js'
import Map from '../components/MapComponent.js'
import MapComponent from '../components/MapComponent.js'

const Home = () => {

  //These values needed to be changed
  const storeLogo = 'https://greenthatlife.com/wp-content/uploads/2021/06/Image-6-8-21-at-3.51-PM.jpeg'
  const storeName = 'Store Name'
  const storeDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'


  return (
    <div>

      <Navbar/>


      <div className='home-page'>
        <img className='home-level1' src={graphic}></img>
        <div className='homeMap'>
          <h1 className='explore-map'> <b>Explore the map to find a business near you!</b></h1> 
          <MapComponent /> 
        </div>
        <div className='page-content'>
          <h2>STORES OF THE MONTH</h2>       
          <div className='home-level2'>
            <StoreWidget
              storeLogo={storeLogo}
              storeName={storeName}
              storeDescription={storeDescription}
            />
            <StoreWidget
              storeLogo={storeLogo}
              storeName={storeName}
              storeDescription={storeDescription}
            />
            <StoreWidget
              storeLogo={storeLogo}
              storeName={storeName}
              storeDescription={storeDescription}
            />
          </div>
        </div> 
        

      </div>
    </div>
  )
}

export default Home