import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGlitch } from 'react-powerglitch'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
    <section className=' max-w-contentContainer h-screen mb-32 mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ' id='home'>
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
        className='mx-auto z-10 '>
          <a href="#projects">
        <button className=' w-52 h-14 text-sm font-titleFont border mx-auto border-textGreen rounded-md text-textGreen
         tracking-wide hover:bg-hoverColor duration-300 z-50 '>Visit Projects</button>
         </a>
       </motion.div>
       <Button onClick={handleOpen} className='w-full mdl:justify-start'>fun fact, read here</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Fun fact"
        aria-describedby="Fact about African American population"

      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            As a 23 year old developer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          I am eager to seize every opportunity that comes my way to enhance my skills, access valuable resources, and strengthen my work ethic. It`s important to note that the average age of programmers stands at 47 years old. Within this field, the majority of programmers are White (64.0%), followed by Asian (17.8%), Hispanic or Latino (8.5%), and Black or African American (4.8%). Despite the underrepresentation of African Americans in the industry, I am determined to defy the odds and make a significant impact in the tech world.
          </Typography>
        </Box>
      </Modal>
        </section>
  )
}

export default Banner