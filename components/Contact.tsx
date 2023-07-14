import React from 'react'

const Contact = () => {
  return (
    <section id='contact'
     className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
     items-center justify-center'>
        <p className='font-titlefont text-lg text-textGreen font-semibold flex
        items-center tracking-wide'>04. What`s Next?</p>
        <h2 className='font-titleFont text-5xl font-semibold'>Get in Touch</h2>
        <p className='max-w-[600px] text-center text-textDark'>
            Currently seeking employment. As a motivated developer, you are tirelessly seeking new opportunities to expand your skill set and make meaningful contributions to the ever-evolving digital landscape.
        </p>
        <a href="mailto:blockstarter34@Gmail.com">
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm
        text-textgreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>Say What`s up</button>
        </a>
        </section>
  )
}

export default Contact