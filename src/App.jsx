import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import BgImg from './assets/bgImg.gif'
import './styles.css'

const App = () => {
  return (
    <div className='page'>
      <div className='overlay'></div>
      <img className='bg-img' src={BgImg} />
      <div className="page-content">
        <h1>Launching Soon</h1>
        <h3>Leave your email and we'll let you know once the site goes live.</h3>
      </div>
      <div className="clock">
        <FlipClockCountdown className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
          duration={0.5}
        >
        </FlipClockCountdown>
      </div>
      <div className="btn">
        <button>Notify me</button>
        </div>
    </div>
  );
};

export default App;
