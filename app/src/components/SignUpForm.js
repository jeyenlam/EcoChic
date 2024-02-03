import React from 'react'
import Navbar from '../components/Navbar.js'

function SignUpForm () {

  const SignUp = (e) => {
    e.preventDefault();

    const rawFormData = new FormData(e.target)
    const formData = Object.fromEntries(rawFormData)

    // TODO: 
    // [  ] persist this data to a JSON server 
    // [  ] query and API endpoint to get the (lat,lon) coordinates of a 
    //      person's address and store that instead of a string address 
    // [  ] integrate this component into the login form page 
    // [  ] if there is time, allow a user to add a profile pic to a user's profile 

    console.log(formData);
  }


  return (
    <div className='signUpForm'>
        <Navbar/>
      <h1>SignUp</h1>
      <form id='signUpForm' onSubmit={SignUp}>
        {/* <div className='label-div'>
          <label htmlFor='firstName'>First Name</label>
          <label htmlFor='lastName'>Last Name</label>
          <label htmlFor='userName'>Username</label>
          <label htmlFor='password'>Password</label>
          <label htmlFor='email'>Email</label>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <label htmlFor='address'>Address</label>
        </div> */}
        <div className='input-div'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name='firstname'placeholder='First Name' />

            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name='firstname' placeholder='Last Name'/>

            <label htmlFor='userName'>Username</label>
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
            <select  id='style' name='style'> 
                <option background-image='url(../pictures/y2k.jpg);' value='eclectic'>Choose a Style</option>
                <option value='eclectic'>Eclectic</option>
                <option value='vintage'>Vintage</option>
                <option value='y2k'>Y2k</option>
                <option value='goth'>Goth</option>
                <option value='anime'>Anime</option>
                <option value='hippie'>Hippie</option>
                <option value='minimalist'>Minimalist</option>
                <option value='sporty'>Sporty</option>
                <option value='preppy'>Preppy</option>
            </select>  
        </div> 
        <button type='submit' id='signUpButton'>Sign Up</button>       
      </form>
    </div>
  )
}

export default SignUpForm


// Username 
// First Name 
// Last Name 
// Password
// Phone Number
// Email
// Address (add functionality that 
// Style Form (collage/mood board pictures to symbolise for each one)
// What type of style do you gravitate towards?
// Eclectic  
// Vintage
// Y2k 
// Goth 
// Anime 
// Hippie
// Minimalist
// Sporty 
// Preppy
