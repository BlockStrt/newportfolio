import React from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {RxOpenInNewWindow} from 'react-icons/rx'

import { p1, p2, p3, p4 } from '@/public/assets'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Creations I`ve engineered' titleNo='03'/>
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
            items-end text-right xl:nl-16 z-10'>
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
        {/* project three */}
        {/* project four */}
        </section>
  )
}

export default Projects