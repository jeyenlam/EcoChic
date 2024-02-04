import React, { useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'

const MapComponent = () => {
  const [brandsJSON, setBrandsJSON] = useState([]);

  const markerIcon = new Icon({
    // <a href="https://www.flaticon.com/free-icons/marker" title="marker icons">Marker icons created by kmg design - Flaticon</a>
    iconUrl: "https://drive.google.com/thumbnail?id=1It7S0dGUP20xOrdPoFIO--nRPi4BxqeE", 
    iconSize: [40,40]
  })

  // load all of the coordinates of all the brands from the JSON server 
  const loadMarkers = async () => {

    try {
      const response = await fetch('http://localhost:3030/Brands');
      const brands = await response.json();

      const addresses = brands.map((brand) => [brand.address.lat, brand.address.lon]);
      setBrandsJSON(addresses);
      // console.log(brandsJSON);
    } catch (error) {
      console.error('Error loading markers:', error);
    }
  }

 

  useEffect(() => {
    loadMarkers()
  }, [])


  return (
      <MapContainer center={[40.7128, -74.0060]} zoom={13}>
          <TileLayer
              url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {
            brandsJSON.map((position, index) => (
              <Marker key={index} position={position} icon={markerIcon}>
              </Marker>
            ))
          }
          {/* <Marker position={[40.7128, -74.0060]} icon={markerIcon}>
          </Marker> */}
      </MapContainer>

      
  )
}

export default MapComponent