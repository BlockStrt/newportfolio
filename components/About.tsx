import {BsLightningCharge} from 'react-icons/bs'
import SectionTitle from './SectionTitle'
import Image from 'next/image'


function About() {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title='About Me' titleNo='01'/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex
            flex-col gap-4'>
                <p>
                Web developer with 
                <span className='text-textGreen'> nearly 2 years experience </span> currently working on expanding development knowledge across all technologies.<span className='text-textGreen'> Seeking to leverage</span> technical/creative skill to progress the work flow of teams. Leveraging my creative vision to design real world applications guiding me to unlock great potential when it comes to building.
                </p>
                <p>
                    Here are a few technologies I have been working with recently:
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
                    <div>
                        <Image className='rounded-lg h-full object-cover' src='' alt='profileimg'/>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default About