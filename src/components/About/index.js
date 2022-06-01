import React from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
            </h1>
            <p>
            I am a hardworker whose resilience is geared to productive results. These past few months I’ve dedicated myself and my time to becoming a software engineer and increasing my ability to think like a software engineer. I’m highly motivated to get the opportunity to learn from others as well as share the knowledge that I have gained. My ability to consistently be reliable would be an asset to any company. My personal growth is very important to me. I have gained a ton of character and humility from my previous experiences. A few of my biggest interests at the moment are traveling, gaining skills/knowledge, and networking and interacting with others. 
            </p>
        </div>
    </div>
  )
}

export default About