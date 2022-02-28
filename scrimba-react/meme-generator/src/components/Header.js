import React from 'react'
import '../assets/css/Header.css'
import trollFace from '../assets/images/troll-face.png'

function Header() {
  return (
    <header className='header'>
        <div className='logo-wrapper'>
            <img className='title-img' src={trollFace} alt='trollface-logo' />
            <div className='app-name'>Meme Generator</div>
        </div>
        <div className='course'>
            React Course - Project 3
        </div>
    </header>
  )
}

export default Header