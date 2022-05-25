import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
        </Link>
        
    </div>
  )
}

export default Sidebar