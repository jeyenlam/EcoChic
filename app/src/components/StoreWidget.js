import React from 'react'

const StoreWidget = ({storeLogo, storeName, storeDescription}) => {
  return (
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