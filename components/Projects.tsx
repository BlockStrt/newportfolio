import React from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {RxOpenInNewWindow} from 'react-icons/rx'

import { p1, p2, p3, p4 } from '@/public/assets'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Creations I`ve engineered' titleNo='03'/>
     <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
           {/* project one */}
           <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
              <a 
               className='w-full xl:w-1/2 h-auto relative group'
               href="https://hammerandhope.org"
               target='_blank'>
               <div>
              <Image
               className='w-full h-full object-contain'
               src={p1} alt='hammerImg'/>
                </div>
               </a>
               <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Hammer&Hope</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Magazine based on <span className='text-textGreen'>black politics & culture</span> 
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark'>
                <li>NextJS</li>
                <li>React</li>
                <li>Sass</li>
                <li>Sanity IO</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-textGreen duration-300'
                href="https://hammerandhope.org"
                target='_blank'>
                  <RxOpenInNewWindow/>
                </a>
              </div>
            </div>
            </div>  
        </div>
        {/* project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
              <a 
               className='w-full xl:w-1/2 h-auto relative group'
               href="https://store.jugrnaut.com"
               target='_blank'>
               <div>
              <Image
               className='w-full h-full object-contain'
               src={p2} alt='jugImg'/>
                </div>
               </a>
               <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:mr-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Hammer&Hope</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              Chicago based <span className='text-textGreen'>streetwear</span> brand
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark'>
                <li>Wordpress</li>
                <li>Php</li>
                <li>Css</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                className='hover:text-textGreen duration-300'
                href="https://store.jugrnaut.com"
                target='_blank'>
                  <RxOpenInNewWindow/>
                </a>
              </div>
            </div>
            </div>  
        </div>
        {/* project three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
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
        </div>
        {/* project four */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
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
        </div>
     </div>
        </section>
  )
}

export default Projects