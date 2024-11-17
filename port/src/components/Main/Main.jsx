import React, { useState } from 'react';
import homeVideo from '../../assets/homepage.mp4'
import { animate, motion } from 'framer-motion'
import './Main.css'
import SkillsImage from './SkillsImage';
import ProfilePic from '../AboutMe/ProfilePic';
import Description from '../AboutMe/Description';
const Main = (props) => {

    return (
        <main className=''>
            <div className='profile-desc-container flex justify-center'>
                <video src={homeVideo} autoPlay={true}></video>
                {/* <ProfilePic />
                <Description /> */}
            </div>
            {/* <div className='dev-icon-container'>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' skill={'HTML'} stars={5}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' skill={'CSS'} stars={5}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' skill={'Python'} stars={4}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' skill={'Java'} stars={4}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' skill={'Tailwind'} stars={4}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' skill={'React'} stars={5}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' skill={'NodeJS'} stars={5}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' skill={'NextJS'} stars={4}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' skill={'ExpressJS'} stars={4}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' skill={'MySQL'} stars={4}/>
                <SkillsImage src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' skill={'MongoDB'} stars={4.5}/>
            </div>
            <h2 className="header-main right">Projects</h2> */}


        </main>
    )
}

export default Main;