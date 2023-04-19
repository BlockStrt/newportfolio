import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Banner() {
    const [text, count] = useTypewriter({
        words:[
            'Hey, Josh here',
            'Guy-who-loves-code.jsx',
            '<LovesLifeMore />'
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <section className=' max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4' id='home'>
        <BackgroundCircles/>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src='/assets/images/pfp.jpeg' width={100} height={100} alt='image'/>
        </motion.div>
        <h3 className='text-lg font-titleFont tracking-wide text-textGreen text-center'>{text}</h3>
        
        </section>
  )
}

export default Banner