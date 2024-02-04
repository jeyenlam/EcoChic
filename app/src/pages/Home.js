import React from 'react'
import Navbar from '../components/Navbar'
import graphic from '../pictures/SUSTAINABLE_THROUGH_QUALITY.png'
import StoreWidget from '../components/StoreWidget.js'
import Map from '../components/MapComponent.js'
import MapComponent from '../components/MapComponent.js'
import { useParams } from 'react-router-dom'

const Home = () => {

  //These values needed to be changed
  const storeLogo = 'https://greenthatlife.com/wp-content/uploads/2021/06/Image-6-8-21-at-3.51-PM.jpeg'
  const storeName = 'Store Name'
  const storeDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  const param = useParams().userId;
  console.log(param);


  return (
    <div>

      <Navbar userId={param}/>

      <div className='home-page'>
        <img className='home-level1' src={graphic}></img>
        <div className='homeMap'>
          <h1 className='explore-map'> <b>Explore the map to find a business near you!</b></h1> 
          <MapComponent userId={param}/> 
        </div>
        <div className='page-content'>
          <h2>STORES OF THE MONTH</h2>       
          <div className='home-level2'>
            <StoreWidget
              storeLogo='https://media.cntraveler.com/photos/619682ab57ff29e3eed86cf0/16:9/w_2560,c_limit/Boho%20Hunter%20Wynwood_Photo%20Jul%2028,%205%2037%2043%20PM.jpg'
              storeName='Boho Bliss Boutique'
              storeDescription='Embrace urban sophistication with Urban Elegance Collective, where contemporary styles meet sustainable choices.'
            />
            <StoreWidget
              storeLogo='https://s3-eu-west-1.amazonaws.com/ellerman-production/ellerman-blog/wp-content/uploads/2013/04/5.jpg'
              storeName='Urban Elegance Collective'
              storeDescription='Boho Bliss Boutique offers a curated collection of bohemian-inspired fashion, blending free-spirited styles with sustainable practices.'
            />
            <StoreWidget
              storeLogo='https://s3-eu-west-1.amazonaws.com/ellerman-production/ellerman-blog/wp-content/uploads/2013/04/5.jpg'
              storeName='Sunshine Vintage Emporium'
              storeDescription='Sunshine Vintage Emporium brings the charm of the past to present fashion, offering a carefully curated selection of timeless pieces.'
            />
          </div>
        </div> 
        

      </div>
    </div>
  )
}

export default Home