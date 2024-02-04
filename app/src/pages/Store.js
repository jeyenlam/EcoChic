import Navbar from '../components/Navbar.js'
import StoreWidget from '../components/StoreWidget.js'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Store = () => {

  const param = useParams().id;  
  const [brand, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  // load all of the coordinates of all the brands from the JSON server 
  const loadStores = async () => {

    try {
      const response = await fetch('http://localhost:3030/Brands');
      const brandsData = await response.json();
      brandsData.forEach((b) => {
        if (b.id == param) {
            setBrand(b);
        }
      })
      setLoading(false);
    //   console.log(brand);
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
      <Navbar/>     
        <div className='stores-page page-content'>
        <div className='store-page-outer'>
        <img className='store-page-img' src={brand.brandLogo} />
        <div className='store-page-content'>
            <h1 className='store-page-header'> {brand.brandName} </h1>
            <div className='store-page-details'>
                {
                brand.tags.style?.eclectic == true ? 
                <div className='style'>
                    <p> Eclectic </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.vintage == true ? 
                <div className='style'>
                    <p> Vintage </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.y2k == true ? 
                <div className='style'>
                    <p> Y2k </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.goth == true ? 
                <div className='style'>
                    <p> Goth </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.anime == true ? 
                <div className='style'>
                    <p> Anime </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.hippie == true ? 
                <div className='style'>
                    <p> Hippie </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.minimalist == true ? 
                <div className='style'>
                    <p> Minimalist </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.sporty == true ? 
                <div className='style'>
                    <p> Sporty </p>
                </div> :
                <div></div>
                }
                {
                brand.tags.style?.preppy == true ? 
                <div className='style'>
                    <p> Preppy </p>
                </div> :
                <div></div>
                }
            </div>
            <div>
                <p className='store-page-address'> 
                    <b>Address: </b> {brand.stringAddress}
                </p>
            </div>
            <div>
                <p className='store-page-phoneNumber'> 
                    <b>Phone Number: </b> {brand.phoneNumber}
                </p>
            </div>
            <div>
                <p className='store-page-hours'> 
                    <b>Store Hours: </b> {brand.hours}
                </p>
            </div>
            <div>
                <p className='store-page-description'>
                    {brand.longDescription }
                </p>
            </div>
            {/* <div className='storeMap'>
                
            </div> */}
            
        </div>

        <div className='store-page-reviews'>
            {
                brand.reviews?.map((review) => (
                    <div className='store-page-review'>
                        <div className='profile-rating-pfp'>
                            <div> <img src={review.profilePng} className='store-page-pfp'/> </div>
                            <div className='profile-and-rating'>
                               <div>
                               <b> {review.profileName}</b>
                               </div>
                               <div>
                               <b> Rating: </b>  {review.numStars}
                               </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                {review.comment}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
        
      </div>
      </div>
    </div>
  )
}



export default Store