import React, { useState } from 'react';
import homeVideo from '../../assets/homepage2.mp4'
import { animate, motion } from 'framer-motion'
import './Main.css'
const Main = (props) => {

    const hoverImage = () => {

    }
    return (
        <main className=''>
            <h2 className='header-main'>Skills</h2>
            <div className='dev-icon-container'>
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}

                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg'
                />
                <motion.img
                    className='dev-icon'
                    width={150}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, duration: .5 }}
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
                />
            </div>
            <h2 className="header-main right">Projects</h2>

            
        </main>
    )
}

export default Main;