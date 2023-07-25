import React from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {RxOpenInNewWindow} from 'react-icons/rx'
import { useGlitch } from 'react-powerglitch'


import { p1, p2, p3, p4, p5, p6 } from '@/public/assets'

const Projects = () => {
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
  return (
    <section id='projects' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Email Development' titleNo='03'/>
     <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
           {/* project one */}
           <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
           ref={glitch.ref}
           
           >
            <div className='flex flex-col xl:flex-row gap-6'>
              <a 
               className='w-full xl:w-1/2 h-auto relative group'
               href="https://stunning-sherbet-097bd6.netlify.app"
               target='_blank'>
               <div>
              <Image
               className='w-full h-full object-contain'
               src={p5} alt='vitaminImg'/>
                </div>
               </a>
               <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Promotional Email</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              The Vitamin Shoppe <span className='text-textGreen'>promotional email</span> 
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark'>
                <li>Html</li>
                <li>Css</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-textGreen duration-300'
                href="https://stunning-sherbet-097bd6.netlify.app"
                target='_blank'>
                  <RxOpenInNewWindow/>
                </a>
              </div>
            </div>
            </div>  
        </div>
        {/* project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
        ref={glitch.ref}>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
              <a 
               className='w-full xl:w-1/2 h-auto relative group'
               href="https://tranquil-lolly-115870.netlify.app"
               target='_blank'>
               <div>
              <Image
               className='w-full h-full object-contain'
               src={p6} alt='ssenseImg'/>
                </div>
               </a>
               <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:mr-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>SSENSE transactional email</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              SSENSE <span className='text-textGreen'>transactional</span> email
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark'>
                <li>Html</li>
                <li>Css</li>
                
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-textGreen duration-300'
                href="https://tranquil-lolly-115870.netlify.app"
                target='_blank'>
                  <RxOpenInNewWindow/>
                </a>
              </div>
            </div>
            </div>  
        </div>
        {/* project three */}
        {/* <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
        ref={glitch.ref}>
            <div className='flex flex-col xl:flex-row gap-6'>
              <a 
               className='w-full xl:w-1/2 h-auto relative group'
               href="https://halfevilco.com"
               target='_blank'>
               <div>
              <Image
               className='w-full h-full object-contain'
               src={p3} alt='halfImg'/>
                </div>
               </a>
               <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Half Evil</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Connecticut based <span className='text-textGreen'> streetwear</span> brand
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark'>
                <li>Shopify</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-textGreen duration-300'
                href="https://halfevilco.com"
                target='_blank'>
                  <RxOpenInNewWindow/>
                </a>
              </div>
            </div>
            </div>  
        </div> */}
        {/* project four */}
        {/* <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
        ref={glitch.ref}>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
              <a 
               className='w-full xl:w-1/2 h-auto relative group'
               href="https://meed.vercel.app"
               target='_blank'>
               <div>
              <Image
               className='w-full h-full object-contain'
               src={p4} alt='mxdImg'/>
                </div>
               </a>
               <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:mr-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Student Gallery</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              <span className='text-textGreen'>Gallery setup</span> for a student who wishes to broadcast accolades to her community, showcasing a gallery of art, photography, and fashioon design as well.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark'>
                <li>NextJS</li>
                <li>Tailwindcss</li>
                <li>Sanity IO</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-textGreen duration-300'
                href="https://meed.vercel.app"
                target='_blank'>
                  <RxOpenInNewWindow/>
                </a>
              </div>
            </div>
            </div>  
        </div> */}
     </div>
        </section>
  )
}

export default Projects