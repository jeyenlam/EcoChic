import React from 'react'
import { Link } from 'react-router-dom'

const StoreWidget = ({storeLogo, storeName, storeDescription}) => {
  return (
    <div className='store-widget'>
      <div className='store-logo' style={{backgroundImage: `url(${storeLogo})` }}></div>
      <div className='detail'>
        <h3> {storeName} </h3>
        <p>{storeDescription}</p>
        <button className='map-store-more-info'>
                <Link to={`/store`}>More Info</Link>
        </button>
      </div>    
    </div>
  )
}

export default StoreWidget