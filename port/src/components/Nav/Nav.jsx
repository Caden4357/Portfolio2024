import React, { useState } from 'react';
import {Link} from 'react-scroll'
import logo from '../../assets/logodrip.png'
// CSS
import './Nav.css'
const Nav = (props) => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo for Caden Wilcox" width={150} />
                <div className='nav-links-container'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Projects</Link>
                    <Link>Education</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav;