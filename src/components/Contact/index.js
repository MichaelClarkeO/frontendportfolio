import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect (() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_xyq424n',
                'template_qh98rg8',
                refForm.current,
                'u_fj4fjSVJ8OLR6xY'

            )
            .then(
                () => {
                    alert('Message successfully sent')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

  return (
      <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15} 
                    />
                </h1>
                <p>
                    Interested in all opportunities that will help me grow as a developer.
                    Feel free to contact me with any opportunity or projects you may need 
                    assistance on. Using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required >
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact