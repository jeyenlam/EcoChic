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

  const handleOnScroll = () => {
    const letters = document.querySelector('.letters');
    const languageBox = document.querySelector('.language-box');

    letters.classList.add('fade-out');
    letters.remove();

    languageBox.style.display = 'block';
  }

  return (
    <div className='intro-animation'>
      <div className='letters' onClick={handleOnScroll}>
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
      <div className='language-box'>
          <select id="languages" defaultValue='' onChange={() => navigate('/home')} >
          <option value="" disabled>Select a language</option>
            <option value="english">ENGLISH</option>
            <option value="espanol">ESPANOL</option>
            <option value="mandarin">MANDARIN</option>
            <option value="french">FRENCH</option>
          </select>
      </div>
    </div>
  )
}

export default Intro