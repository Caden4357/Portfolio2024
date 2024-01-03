import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosStar, IoIosStarOutline, IoIosStarHalf} from "react-icons/io";
const SkillsImage = ({ src, skill, stars }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const flipImage = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
        else {
            setIsFlipped(!isFlipped)
            setIsAnimating(false)
        }
    }
    return (
        <div>
            {
                !isFlipped ?
                    <motion.img
                        className='dev-icon'
                        width={150}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, duration: .5 }}
                        onClick={flipImage}
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{
                            type: 'smooth',
                            // duration:5
                        }}
                        src={src}
                    />
                    :
                    <motion.div onClick={flipImage} whileHover={{ scale: 1.2, duration: .5 }} className='dev-icon' style={{ width: '150px', height: '150px', textAlign:'center' }}>
                        <h2>{skill}</h2>
                        {
                            stars === 5 ?
                                <>
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </>
                                :
                                stars === 4 ?
                                    <>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStarOutline />
                                    </>
                                    :
                                    <>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStarHalf />
                                    </>
                        }
                    </motion.div>
            }
        </div>
    )
}

export default SkillsImage;