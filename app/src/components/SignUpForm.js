import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar.js'

function SignUpForm () {

    // TODO: 
    // [ X ] persist this data to a JSON server 
    // [   ] query and API endpoint to get the (lat,lon) coordinates of a 
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

  const SignUp = (e) => {
    e.preventDefault();

    const rawFormData = new FormData(e.target)
    const formData = Object.fromEntries(rawFormData)

    const user = {
      username : formData.username, 
      firstName : formData.firstName, 
      lastName : formData.lastName, 
      password : formData.password, 
      phoneNumber : formData.phoneNumber, 
      email : formData.email, 
      address : formData.address,
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
    // console.log(user)
  }


  return (
    <div className='signUpForm'>
        <Navbar/>
      <h1>SignUp</h1>
      <form id='signUpForm' onSubmit={SignUp}>
        <div className='input-div'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name='firstName'placeholder='First Name' />

            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name='lastName' placeholder='Last Name'/>

            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username'placeholder='Username' />

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' placeholder='Password'/>

            <label htmlFor='email'>Email</label>
            <input type='text' id='email' name='email'placeholder='Email' />

            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='text' id='phoneNumber' name='phoneNumber' placeholder='Phone Number'/>

            <label htmlFor='address'>Address</label>
            <input type='text' id='address' name='address'placeholder='Address' />

            <label htmlFor='style'>What type of style do you gravitate towards?</label>
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
        <button type='submit' id='signUpButton'>Sign Up</button>       
      </form>
    </div>
  )
}

export default SignUpForm

