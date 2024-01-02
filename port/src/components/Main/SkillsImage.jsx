import React, {useState} from 'react';
import { motion } from 'framer-motion';
const SkillsImage = ({src, skill}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const flipImage = () => {
        setIsFlipped(!isFlipped)
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
                    transition={{
                        type: 'smooth',
                        // duration:5
                    }}
                    src={src}
                />
                :
                <motion.div onClick={flipImage} whileHover={{ scale: 1.2, duration: .5 }} className='dev-icon' style={{width:'150px', height:'150px'}}>
                    <h2 className='text-center'>{skill}</h2>
                    <h2 className="text-center normal-font">10/10</h2>
                </motion.div>
            }
        </div>
)}

export default SkillsImage;