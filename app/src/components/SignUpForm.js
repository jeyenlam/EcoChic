import React, { useRef } from 'react'

function SignUpForm () {

    // TODO: 
    // [ X ] persist this data to a JSON server 
    // [ X ] query and API endpoint to get the (lat,lon) coordinates of a 
    //      person's address and store that instead of a string address 
    // [ X ] integrate this component into the login form page 
    // [   ] if there is time, allow a user to add a profile pic to a user's profile 

  const eclecticRef = useRef(null)
  const vintageRef = useRef(null)
  const y2kRef = useRef(null)
  const gothRef = useRef(null)
  const animeRef = useRef(null)
  const hippieRef = useRef(null)
  const minimalistRef = useRef(null)
  const sportyRef = useRef(null)
  const preppyRef = useRef(null)

  const API_Key = '901e6eac63msh5582d3c66c4543cp1aec7fjsne11d6a954fdc';

  const SignUp = async (e) => {
    e.preventDefault();

    const rawFormData = new FormData(e.target)
    const formData = Object.fromEntries(rawFormData)
    var lat = 0
    var lon = 0

    const fetchLatLon = async () => {
      const address = formData.address;
      let baseUrl = 'https://google-maps-geocoding.p.rapidapi.com/geocode/json?address='
      const tokens = address.split(' ');

      tokens.map((token, index) => {
        if (index === 0){
          baseUrl += token;
        }
        else if (index === tokens.length - 1){
          baseUrl += '&language=en'
        }
        else{
          baseUrl += `%20${token}`
        }
      })

      const url = baseUrl;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_Key,
          'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
        },
      };
    
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.json();

          lat = (result['results'][0]['geometry']['location']['lat'])
          lon = (result['results'][0]['geometry']['location']['lng'])

        } else {
          console.error(`Error: ${response.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    await fetchLatLon();

    const user = {
      username : formData.username, 
      firstName : formData.firstName, 
      lastName : formData.lastName, 
      password : formData.password, 
      phoneNumber : formData.phoneNumber, 
      email : formData.email, 
      address : {
        lat: lat,
        lon: lon
      },
      style : {
        eclectic: eclecticRef.current.checked, 
        vintage: vintageRef.current.checked, 
        y2k: y2kRef.current.checked, 
        goth: gothRef.current.checked, 
        anime: animeRef.current.checked, 
        hippie: hippieRef.current.checked, 
        minimalist: minimalistRef.current.checked, 
        sporty: sportyRef.current.checked, 
        preppy: preppyRef.current.checked
      }
    }


    fetch('http://localhost:3030/Users', {
      method: 'POST',
      body: JSON.stringify(user)
    })
    console.log(user)
  }

  return (
    <div className='signUpForm'>
      
      <div className='form-header'>
        <h1 className='purple'>SignUp</h1>
      </div>
      
      <form id='signUpForm' onSubmit={SignUp}>
        <div className='form-category2'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' name='firstName'placeholder='First Name' />
        </div>
        <div className='form-category2'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' name='lastName' placeholder='Last Name'/>
        </div>
        <div className='form-category2'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username'placeholder='Username' />
        </div>
        <div className='form-category2'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' placeholder='Password'/>
        </div>
        <div className='form-category2'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email'placeholder='Email' />
        </div>
        <div className='form-category2'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input type='text' id='phoneNumber' name='phoneNumber' placeholder='Phone Number'/>
        </div>
        <div className='form-category2'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' name='address'placeholder='Address' />
        </div>
        
        
        <div className='sub-form'>
          
          <label className='purple' htmlFor='style'>What type of style do you gravitate towards?</label>

          <div className='bunchOfCheckboxes'> 

              <label htmlFor='eclectic'>Eclectic</label>
              <input type='checkbox' defaultChecked={false} ref={eclecticRef}/>

              <label htmlFor='vintage'>Vintage</label>
              <input type='checkbox' defaultChecked={false} ref={vintageRef}/>

              <label htmlFor='y2k'>Y2k</label>
              <input type='checkbox' defaultChecked={false} ref={y2kRef}/>

              <label htmlFor='goth'>Goth</label>
              <input type='checkbox' defaultChecked={false} ref={gothRef}/>

              <label htmlFor='anime'>Anime</label>
              <input type='checkbox' defaultChecked={false} ref={animeRef}/>

              <label htmlFor='hippie'>Hippie</label>
              <input type='checkbox' defaultChecked={false} ref={hippieRef}/>

              <label htmlFor='minimalist'>Minimalist</label>
              <input type='checkbox' defaultChecked={false} ref={minimalistRef}/>

              <label htmlFor='sporty'>Sporty</label>
              <input type='checkbox' defaultChecked={false} ref={sportyRef}/>

              <label htmlFor='preppy'>Preppy</label>
              <input type='checkbox' defaultChecked={false} ref={preppyRef} />
          </div>
        </div>
        <div className='form-footer'>
          <button type='submit' id='signUpButton'>Sign Up</button>
        </div>        
      </form>
    </div>
  )
}

export default SignUpForm

