import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { 
faAngular, 
faCss3, 
faReact, 
faGitAlt, 
faHtml5, 
faJsSquare, 
} from '@fortawesome/free-brands-svg-icons';
import './index.scss'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
      <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', '', 'M', 'e']}
                    idx={15}
                    />
            </h1>
            <p>
            I am a hardworker whose resilience is geared to productive results. These past few months I’ve dedicated myself and my time to becoming a software engineer and increasing my ability to think like a software engineer. I’m highly motivated to get the opportunity to learn from others as well as share the knowledge that I have gained. My ability to consistently be reliable would be an asset to any company. My personal growth is very important to me. I have gained a ton of character and humility from my previous experiences. A few of my biggest interests at the moment are traveling, gaining skills/knowledge, networking and interacting with others. 
            </p>
        </div>
        
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About