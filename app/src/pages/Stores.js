import Navbar from '../components/Navbar.js'
import StoreWidget from '../components/StoreWidget.js'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const Stores = () => {

  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const param = useParams().userId;

  // load all of the coordinates of all the brands from the JSON server 
  const loadStores = async () => {

    try {
      const response = await fetch('http://localhost:3030/Brands');
      const brandsData = await response.json();
      setBrands(brandsData);
      setLoading(false);
      console.log(brandsData);
    } catch (error) {
      console.error('Error loading markers:', error);
      setLoading(false);
    }
  }

 

  useEffect(() => {
    loadStores()
  }, [loading])

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any loading indicator
  }


  //We also need the number of stores registered with us
  //--> to dynamically rendering the widget

  return (
    <div>
      <Navbar userId={param}/>     
      <div className='stores-page page-content'>
        <div className='stores-level1'>
          <h2>STORES LIST</h2>
          <input type='text' placeholder='🔍 Search'></input>
        </div>
        
        <div className='stores-level2'>
          {
            brands.map((brand, index) => (
              <StoreWidget
                storeLogo={brand.brandLogo}
                storeName={brand.brandName}
                storeDescription={brand.shortDescription}
                brand={brand}
              />
            ))
          }
        </div>
        
      </div>
    </div>
  )
}



export default Stores