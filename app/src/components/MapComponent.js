import React, { useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'
import StoreWidget from '../components/StoreWidget.js'
import MapStoreWidget from './MapStoreWidget.js'

const MapComponent = () => {
  //These value needed to be updated dynamically
  const [brandsLatLon, setBrandsLatLon] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const markerIcon = new Icon({
    // <a href="https://www.flaticon.com/free-icons/marker" title="marker icons">Marker icons created by kmg design - Flaticon</a>
    iconUrl: "https://drive.google.com/thumbnail?id=1It7S0dGUP20xOrdPoFIO--nRPi4BxqeE", 
    iconSize: [40,40]
  })

  // load all of the coordinates of all the brands from the JSON server 
  const loadMarkers = async () => {

    try {
      const response = await fetch('http://localhost:3030/Brands');
      const brandsData = await response.json();
      setBrands(brandsData);

      const addresses = await brands.map((brand) => [brand.address.lat, brand.address.lon]);
      setBrandsLatLon(addresses);
      setLoading(false);
    } catch (error) {
      console.error('Error loading markers:', error);
      setLoading(false);
    }
  }

 

  useEffect(() => {
    loadMarkers()
  }, [loading])

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any loading indicator
  }

  return (
      <MapContainer center={[25.807198059040545, -80.19083039580919]} zoom={13}>
          <TileLayer
              url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {
            brandsLatLon.map((position, index) => (
              <Marker key={index} position={position} icon={markerIcon}>
                <Popup>
                {brands && brands[index] ? (
                    <MapStoreWidget
                      storeLogo={brands[index]?.brandLogo}
                      storeName={brands[index]?.brandName}
                    />
                  ) : (
                    <span>Error : Data not available</span>
                  )}
                </Popup>
              </Marker>
            ))
          }
          {/* <Marker position={[40.7128, -74.0060]} icon={markerIcon}>
          </Marker> */}
      </MapContainer>

      
  )
}

export default MapComponent