import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGlitch } from 'react-powerglitch'




function Banner() {
  const glitch = useGlitch({
    "playMode": "hover",
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 250,
      "iterations": 1
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 6,
      "velocity": 15,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    },
    "pulse": false
  });
  
    const [text, count] = useTypewriter({
        words:[
            'Hey, Josh here',
            'Guy-who-loves-code.tsx',
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
          
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
         ref={glitch.ref}
         
         src='/assets/images/pfp.jpeg' width={100} height={100} alt='image'/>
        </motion.div>
        <motion.h2
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
         className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px] text-center mx-auto'>Email Developer
         </motion.h2>
        
        <h3 className='text-lg font-titleFont tracking-wide h-6 text-textGreen text-center mx-auto'>{text}
        </h3>
     
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{delay:1.5}} 
        className='mx-auto '>
          <a href="#projects">
        <button className=' w-52 h-14 text-sm font-titleFont border mx-auto border-textGreen rounded-md text-textGreen
         tracking-wide hover:bg-hoverColor duration-300  '>Visit Projects</button>
         </a>
       </motion.div>
        </section>
  )
}

export default Banner