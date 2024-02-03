import React from 'react'
import Navbar from '../components/Navbar.js'
import StoreWidget from '../components/StoreWidget.js'

const Stores = () => {

  //These value needed to be updated dynamically
  const storeLogo = 'https://greenthatlife.com/wp-content/uploads/2021/06/Image-6-8-21-at-3.51-PM.jpeg'
  const storeName = 'Store Name'
  const storeDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'


  //We also need the number of stores registered with us
  //--> to dynamically rendering the widget

  return (
    <div>
      <Navbar/>     
      <div className='stores-page page-content'>
        <div className='stores-level1'>
          <h2>STORES LIST</h2>
          <input type='text' placeholder='🔍 Search'></input>
        </div>
        
        <div className='stores-level2'>
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
  )
}



export default Stores