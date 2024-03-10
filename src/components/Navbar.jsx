

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Logo from "../images/logo-removebg-preview.png"
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
   
    const [color, setClour]= useState(false)

    const changeclour= () =>{
      if (window.scrollY >= 90){
        setClour(true)
      }
      else {
        setClour(false)
      }
    }

    window.addEventListener('scroll', changeclour)
      
    const closeMenu = () => setClick(false)

    return (
        <div className={color ?  'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                <img className='img-log' src={Logo}  />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                     HOME
                     </Link> 
                    </li>
                    <li className='nav-item'>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                     ABOUT
                    </Link> 
                    </li>
                    <li className='nav-item'>
                    <Link to='challnes' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                    CHALLENGES
                     </Link> 
                    </li>
                    <li className='nav-item'>
                    <Link to='register' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                    REGISTER
                    </Link> 
                    </li>
                    <li className='nav-item'>
                    <Link to='conatct' spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu}>
                    CONTACT
                    </Link> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar