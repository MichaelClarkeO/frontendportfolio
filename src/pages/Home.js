import React, {Component} from 'react';
import Typical from 'react-typical'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-parent'>
        <div className='home-details'>
          <div className='colz'>
            <div className='home-icons'>
              <a href='https://www.linkedin.com/in/michael-clarke-462511134/'>
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href='https://github.com/MichaelClarkeO'>
                <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
          <div className='home-intro'>
            <h5>Hello, I'm</h5>
            <h1>Michael Clarke</h1>
            <h5>Full-Stack Developer 💻'</h5>
          </div>
          <div className='home-description'>
            <span className='primary-text'>
              <h1>
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    'Full-Stack Developer 💻',
                    1000,
                    'MERN Stack Developer ⚛️',
                    1000,
                    'Python Django Developer' ,
                    1000,
                  ]}
                  wrapper="p"
                /> */}
              </h1>
            </span>
          </div>
          <div className='home-buttons'>
            <button className='btn primary-btn'>
              Hire Me
            </button>
            <a href='michaelResume.pdf' download='michaelResume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='home-profilePicture'>
          <img src='#' alt='profilePic' />
        </div>
      </div>
    </div>
  )
}

export default Home