import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Intro = () => {

  const [spans, setSpans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const spanElements = Array.from(document.querySelectorAll('.intro-animation .letters span'));
    setSpans(spanElements);
  }, []);

  useEffect(() => {
    if (spans.length > 0) {
      spans.forEach((span, index) => {
        const animationDuration = 5;
        const keyframePercentage = 100 / spans.length;
        const delay = (index * keyframePercentage * animationDuration) / 100;

        span.style.animation = `colorChange ${animationDuration}s infinite`;
        span.style.animationDelay = `${delay}s`;
      });
    }
  }, [spans]);

  const handleOnClick = () => {
    const letters = document.querySelector('.letters');
    const welcomeBox = document.querySelector('.welcome-box');

    letters.classList.add('fade-out');
    // letters.remove();

    welcomeBox.style.display = 'flex';
    welcomeBox.classList.add('.fade-in');
  }

  return (
    <div className='intro-animation'>

      <div className='letters' onClick={handleOnClick}>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
        <span>-</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
        <span>/</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
        <span>+</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
        <span>-</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
        <span>\</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
        <span>+</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>C</span>
      </div>

      <div className='welcome-box'>
        <h1>WELCOME 
          <span className='blue'> TO </span>
          <span className='green'>ECO</span>
          <span className='purple'>CHIC</span>
        </h1>
        <select id="languages" defaultValue='' onChange={() => navigate('/auth')} >
          <option value="" disabled>Select a language</option>
          <option value="english">ENGLISH 🇺🇸</option>
          <option value="espanol">ESPANOL 🇪🇸</option>
          <option value="mandarin">MANDARIN 🇨🇳</option>
          <option value="french">FRENCH 🇫🇷</option>
        </select>
      </div>

    </div>
  )
}

export default Intro