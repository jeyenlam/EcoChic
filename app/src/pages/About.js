import React from 'react'
import Navbar from '../components/Navbar.js'

import sofiaProfile from '../pictures/sofia-profile.jpg'
import darianaProfile from '../pictures/dariana-profile.jpg'
import yenProfile from '../pictures/yen-profile.jpeg'
import lavanyaProfile from '../pictures/lavanya-profile.JPG'
import artImg1 from '../pictures/article1.jpeg'
import artImg2 from '../pictures/article2.jpeg'
import artImg3 from '../pictures/article3.jpeg'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {

  return (
    <div>
      
      <Navbar/>
      
      <div className='about-page page-content'>
        <div className='about-level1'>
          <h1 className='purple'>Who We Are and Our Mission</h1>
          <p>
            <span>We are EcoChic, a sustainable fashion platform that allows you to find ethical and sustainable fashion brands/stores around you. anywhere and everywhere.</span>
            <br/>
            <br/>
            <span>Our mission is to educate you about the issue and give you a hub in which you can easily find stores.</span>
          </p>
        </div>
        
        <div className='about-level2'>
          <ArticleWidget id='1' articleImage={artImg1} articleName='What is fast fashion and why is it so bad?'/>
          <ArticleWidget id='2' articleImage={artImg2} articleName='Why is supporting sustainable clothing brands valuable?'/>
          <ArticleWidget id='3' articleImage={artImg3} articleName='How to spot a Fast Fashion Brand'/>
        </div>

        <div className='about-level3'>
          <h1 className='blue'>Our Team</h1>
          <div className='profile-box'>
            <Profile profile={sofiaProfile} name='Sofia Ayala' role='Project Manager' description=''/>
            <Profile profile={darianaProfile} name='Dariana Gonzalez' role='UX/UI Designer' description=''/>
            <Profile profile={lavanyaProfile} name='Lavanya Menon' role='Full Stack Developer' description=''/>
            <Profile profile={yenProfile}name='Yen Lam' role='Full Stack Developer' description=''/>
          </div>
        </div>
      </div>

    </div>
  )
}

const ArticleWidget = ({id, articleImage, articleName}) => {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/articles/${id}`)
  }

  return (
    <div className='article-widget'>
      <div className='artPic' style={{backgroundImage:`url(${articleImage})`}}></div>
      <div className='article-info' onClick={() => handleNavigate(id)}>
        <h3>{articleName}</h3>
      </div>
    </div>
  )
}

const Profile = ({id, profile, name, role, description}) => {
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