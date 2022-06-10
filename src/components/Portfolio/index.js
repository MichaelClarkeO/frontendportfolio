import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <div className='container portfolio-page'>
        <div className='text-zone'>
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={['C','o','n','t','a','c','t',' ','m','e']}
            idx={15} 
            />
            <p>
                HEY
            </p>
        </div>
    </div>
  )
}

export default Portfolio