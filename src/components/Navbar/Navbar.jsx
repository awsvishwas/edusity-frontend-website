import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import {Link} from 'react-scroll';
import menuIcon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [navColor, setNavColor] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setNavColor(true) : setNavColor(false)
        })

    },[])

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

    }
  return (
    <nav className={`container ${navColor? 'dark-nav': ''} ${mobileMenu? '': 'hide-logo-height'}` }>
        <img src={logo} alt="" className='logo' />
        <ul className={`${mobileMenu? '': 'hide-mobile-menu'}`}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
