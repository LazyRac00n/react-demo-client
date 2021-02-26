import React from 'react';
import '../../App.css';
import { Button } from '../Home/Button';
import './HeroSection.css';
import image from '../../images/video-1.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={image} autoPlay loop muted />
      <h1>PG UNLEASHED RX-78-2</h1>
      <p>It is now coming out!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BUY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
