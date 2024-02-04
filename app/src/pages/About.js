import React from 'react'
import Navbar from '../components/Navbar.js'

import sofiaProfile from '../pictures/sofia-profile.jpg'
import darianaProfile from '../pictures/dariana-profile.jpg'
import yenProfile from '../pictures/yen-profile.jpeg'
import lavanyaProfile from '../pictures/lavanya-profile.JPG'

const About = () => {
  return (
    <div>
      
      <Navbar/>
      
      <div className='about-page page-content'>
        <div className='about-level1'>
          <h1 className='purple'>Who We Are and Our Mission</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className='about-level2'>
          <img src='https://www.psdmockups.com/wp-content/uploads/2019/10/Movie-Poster-Advertising-PSD-Mockup.jpg' alt='poster1'/>
          <img src='https://www.psdmockups.com/wp-content/uploads/2019/10/Movie-Poster-Advertising-PSD-Mockup.jpg' alt='poster2'/>
          <img src='https://www.psdmockups.com/wp-content/uploads/2019/10/Movie-Poster-Advertising-PSD-Mockup.jpg' alt='poster3'/>
          <img src='https://www.psdmockups.com/wp-content/uploads/2019/10/Movie-Poster-Advertising-PSD-Mockup.jpg' alt='poster4'/>
        </div>

        <div className='about-level3'>
          <h1 className='blue'>Our Team</h1>
          <div className='profile-box'>
            <Profile profile={sofiaProfile} name='Sofia Ayala' role='role' description='description'/>
            <Profile profile={darianaProfile} name='Dariana Gonzalez' role='role' description='description'/>
            <Profile profile={lavanyaProfile} name='Lavanya Menon' role='role' description='description'/>
            <Profile profile={yenProfile}name='Yen Lam' role='role' description='description'/>

          </div>
        </div>
      </div>

    </div>
  )
}

const Profile = ({profile, name, role, description}) => {
  return (
    <div className='profile-card'>
      <div className='profile' style={{backgroundImage: `url(${profile})`}}></div>
      <h2 className='green'>{name}</h2>
      <h3 className='purple'>{role}</h3>
      <h4>{description}</h4>
    </div>
  )
}

export default About