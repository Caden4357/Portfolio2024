import React, { useState } from 'react';
import { Link } from 'react-scroll'
import logo from '../../assets/logodrip.png'
import navIcon from '../../assets/nav-icon.png'
// CSS
import './Nav.css'
const Nav = (props) => {

    const openMobileNav = () => {
        const mobileNav = document.querySelector('.mobile-nav-links')
        mobileNav.classList.toggle('open')
    }
    return (
        <header>
            <nav>
                <Link to='/'>
                    <img src={logo} alt="Logo for Caden Wilcox" width={125} className='cursor-pointer' />
                </Link>
                <div className='nav-links-container gap-4  md:w-2/4 lg:w-1/4'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Projects</Link>
                    <Link>Education</Link>
                </div>
                <div className="mobile-nav-links">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Projects</Link>
                    <Link>Education</Link>
                </div>
                <img src={navIcon} alt="Navigation Icon For Mobile Screens" className='nav-icon' width={75} onClick={openMobileNav}/>
            </nav>
        </header>
    )
}

export default Nav;