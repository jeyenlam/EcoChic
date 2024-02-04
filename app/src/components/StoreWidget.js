import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const StoreWidget = ({storeLogo, storeName, storeDescription, brand}) => {
  return (
    brand?
    <div className='store-widget'>
      <div className='store-logo' style={{backgroundImage: `url(${storeLogo})` }}></div>
      <div className='detail'>
        <h3> {storeName} </h3>
        <p>{storeDescription}</p>
        <button className='map-store-more-info'>
                <Link to={`/stores/` + brand.id}>More Info</Link>
        </button>
      </div>    
    </div> :
    <div className='store-widget'>
    <div className='store-logo' style={{backgroundImage: `url(${storeLogo})` }}></div>
    <div className='detail'>
      <h3> {storeName} </h3>
      <p>{storeDescription}</p>
    </div>    
  </div>
  )
}

export default StoreWidget

