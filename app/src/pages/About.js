import React from 'react'
import Navbar from '../components/Navbar.js'

import sofiaProfile from '../pictures/sofia-profile.jpg'
import darianaProfile from '../pictures/dariana-profile.jpg'
import yenProfile from '../pictures/yen-profile.jpeg'
import lavanyaProfile from '../pictures/lavanya-profile.JPG'
import artImg1 from '../pictures/article1.jpeg'
import artImg2 from '../pictures/article2.jpeg'
import artImg3 from '../pictures/article3.jpeg'
import { useParams } from 'react-router-dom'

const About = () => {
  const param = useParams().userId;

  return (
    <div>
      
      <Navbar userId={param}/>
      
      <div className='about-page page-content'>
        <div className='about-level1'>
          <h1 className='purple'>Who We Are and Our Mission</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className='about-level2'>
          <ArticleWidget articleImage={artImg1} articleName='What is fast fashion and why is it so bad?'/>
          <ArticleWidget articleImage={artImg2} articleName='Why is supporting sustainable clothing brands valuable?'/>
          <ArticleWidget articleImage={artImg3} articleName='How to spot a Fast Fashion Brand'/>
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

const ArticleWidget = ({articleImage, articleName}) => {
  return (
    <div className='article-widget'>
      <div className='artPic' style={{backgroundImage:`url(${articleImage})`}}></div>
      <div className='article-info'>
        <h3>{articleName}</h3>
      </div>
    </div>
  )
}

const Profile = ({profile, name, role, description}) => {
  return (
    <div className='profile-card'>
      <div className='profile' style={{backgroundImage: `url(${profile})`}}></div>
      <h2 className='purple'>{name}</h2>
      <h3 className='blue'>{role}</h3>
      <h4 className='green'>{description}</h4>
    </div>
  )
}

export default About