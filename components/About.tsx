import {BsLightningCharge} from 'react-icons/bs'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { useGlitch } from 'react-powerglitch'






function About() {
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
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex gap-8 flex-col-reverse'>
        <SectionTitle title='About Me' titleNo='01' />
        <div className='flex flex-col lgl:flex-row-reverse gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex
            gap-4'>
                <div className='w-[50vw] '>
                <p className=''>
                Email developer with a proven track record of 2 years in Email development,<span className='text-textGreen'> I am currently on a quest</span> to broaden my expertise in all technologies, while utilizing my technical and creative skills to enhance team productivity and harness the full potential of designing real-world applications. 
                </p>
                <p className=''>
                My competency spans across a diverse range of technologies,
                <br/> <span className='text-textGreen'>including but not limited to: </span>
                </p>
                </div>
                <div className='w-[50vw] '>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 mt-6 p-5 mx-auto '>
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
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'
                    ref={glitch.ref}>
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