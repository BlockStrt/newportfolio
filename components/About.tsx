import {BsLightningCharge} from 'react-icons/bs'
import SectionTitle from './SectionTitle'
import Image from 'next/image'



function About() {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title='About Me' titleNo='01'/>
        <div className='flex flex-col lgl:flex-row-reverse gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex
            flex-col gap-4'>
                <p>
                Web developer with a proven track record of 2 years in web development,<span className='text-textGreen'> I am currently on a quest</span> to broaden my expertise in all technologies, while utilizing my technical and creative skills to enhance team productivity and harness the full potential of designing real-world applications. 
                </p>
                <p>
                My competency spans across a diverse range of technologies,
                <br/> <span className='text-textGreen'>including but not limited to: </span>
                </p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Javascript (ES6+)
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Node JS
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span> React 
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Next JS
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Git
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Modern Css & preprocessors
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Tailwind css
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>HTML
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Wordpress
                        </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><BsLightningCharge/>
                        </span>Sanity IO
                        </li>
                   
                </ul>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                        <Image className='rounded-lg h-full object-cover' src='/assets/images/astro.JPG' alt='profileimg' width={300} height={300}  />
                    
                    <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20
                    rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    
                    </div>
                </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 bg-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
            </div>
        </div>
        </section>
  )
}

export default About