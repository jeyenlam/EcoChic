import React from 'react'
import { Link } from 'react-router-dom'

const MapStoreWidget = ({storeLogo, storeName, storeDescription}) => {

    return (
        <div className='map-store-widget'>
        <div className='map-store-logo'>
        <img className='map-store-logo' src={storeLogo} />
        </div>
        <div className='map-store-detail'>
            <h3> {storeName} </h3>
            <p>{storeDescription}</p>
            <button className='map-store-more-info'>
                <Link to={`/stores`}>More Info</Link>
            </button>
        </div>    
        </div>
    )
}

export default MapStoreWidget