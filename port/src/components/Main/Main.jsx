import React, { useState } from 'react';
import homeVideo from '../../assets/homepage2.mp4'
import { animate, motion } from 'framer-motion'
import './Main.css'
import SkillsImage from './SkillsImage';
const Main = (props) => {

    return (
        <main className=''>
            <h2 className='header-main'>Skills</h2>
            <div className='dev-icon-container'>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' skill={'HTML'}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'/>
            </div>
            <h2 className="header-main right">Projects</h2>

            
        </main>
    )
}

export default Main;