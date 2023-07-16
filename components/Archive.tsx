import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import {motion} from 'framer-motion'

const Archive = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>Email Development</h2>
            <p className='text-sm font-titleFont text-textGreen'>view the archive</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10
        '>
       
          <ArchiveCard 
          title='The Vitamin Shoppe Email'
          des='HTML Email'
          listItem={['HTML','CSS']}
          link='https://main--stunning-sherbet-097bd6.netlify.app'
          />
           <ArchiveCard 
          title='The Vitamin Shoppe Email'
          des='HTML Email'
          listItem={['HTML','CSS']}
          link='https://main--stunning-sherbet-097bd6.netlify.app'
          />
          <ArchiveCard 
          title='The Vitamin Shoppe Email'
          des='HTML Email'
          listItem={['HTML','CSS']}
          link='https://main--stunning-sherbet-097bd6.netlify.app'
          />
          <ArchiveCard 
          title='The Vitamin Shoppe Email'
          des='HTML Email'
          listItem={['HTML','CSS']}
          link='https://main--stunning-sherbet-097bd6.netlify.app'
          />
          <ArchiveCard 
          title='The Vitamin Shoppe Email'
          des='HTML Email'
          listItem={['HTML','CSS']}
          link='https://main--stunning-sherbet-097bd6.netlify.app'
          />
          <ArchiveCard 
          title='The Vitamin Shoppe Email'
          des='HTML Email'
          listItem={['HTML','CSS']}
          link='https://main--stunning-sherbet-097bd6.netlify.app'
          />
          
          {
            showMore && (
              
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <div className='flex flex-col md:col-span-2 xl:col-span-3'>
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
                >
                  <ArchiveCard 
                  title='Movie Search App'
                  des='React Project fetching a movie database from OMDB API'
                  listItem={['reactjs','Tailwind CSS']}
                  link='https://bucolic-longma-4d65a0.netlify.app'
                  />
                </motion.div>
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
                >
                <ArchiveCard 
                  title='Type Checker'
                  des='Project focusing on different inputs/labels as well as different Javascript events.'
                  listItem={['Javascript','CSS']}
                  link='https://blockstrt.github.io/typechecker/'
                  />
                </motion.div>
                <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{delay: 0.1}}
                >
                 <ArchiveCard 
                  title='Festival Newsletter'
                  des='Simple festival newsletter with an email contact form to recieve fest tickets'
                  listItem={['HTML','Sass','Javascript','GSAP']}
                  link='https://golden-chebakia-4b3bed.netlify.app'
                  />
                </motion.div>
                </div>
                </div>
              
              
            )
          }
        </div>
        <div className='mt-12 flex items-center justify-center '>
         {
          showMore ? (
           <button 
          onClick={() => setShowMore(false)}
          className='w-36 h-12 rounded-md text-textGreen text-[13px] border 
          border-textGreen hover:bg-hoverColor duration-300'>
            Show Less
          </button> ): ( <button 
          onClick={() => setShowMore(true)}
          className='w-36 h-12 rounded-md text-textGreen text-[13px] border 
          border-textGreen hover:bg-hoverColor duration-300'>Show More</button>
          )}
        </div>
    </div>
  )
}

export default Archive