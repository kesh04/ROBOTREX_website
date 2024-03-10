import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>ABOUT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#challnes'> CHALLENGES</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#register'> REGISTER </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#conatct'>CONTACT</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>© Copyright 2023 NIBM Kurunegala </p>
                </div>
            </div>
        </div>
    )
}

export default Footer