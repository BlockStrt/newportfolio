import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { logo } from '@/public/assets'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/react'
import {TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialTwitterCircular} from 'react-icons/ti'
import {TfiGithub} from 'react-icons/tfi'
import Link from 'next/link'
import {MdOutlineClose} from 'react-icons/md'

function Navbar() {
  const ref = useRef<string | any>('')
  const [showMenu, setShowMenu] = useState(false)
  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    e.preventDefault();
    setShowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    })
    // update the class name of clicked link
    const links =  document.querySelectorAll('.nav-link')
    links.forEach((link)=>{
      link.classList.remove('active')
    });
    e.currentTarget.classList.add('active')
  }

  function handleClick(e:any){
    if(e.target.contains(ref.current)){
      setShowMenu(false)
    }
  }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4
   '>
        <div className=' max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-center'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2.5}} className=' mr-24'
            >
                <Image className='w-14 pt-2' src={logo} height={80} width={80} alt='logo'/>
            </motion.div>
            <div className='hidden md:inline-flex items-center gap-7'>
                <ul className='flex text-[13px] gap-7'>
                    <Link 
                     onClick={handleScroll}
                     href='#home'
                     className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}
                    >Home
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#about' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>01.</span> About
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#experience' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>02.</span> Experience
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#projects' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>03.</span> Projects
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#contact' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>04.</span> Contact
                    </motion.li>
                    </Link>

                </ul>
               <a href='/assets/jlevyres.pdf' target='_blank'>
               <motion.button
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 transition={{delay: 0.5}}
                 className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                 hover:bg-hoverColor duration-300'
                 >
                    Resume
                    </motion.button>
               </a>
            </div>
            {/* small icon section */}
            <div onClick={()=> setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center md:hidden
            text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all
                ease-in-out duration-300' ></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all
                ease-in-out duration-300' ></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all
                ease-in-out duration-300' ></span>
            </div>
            {
              showMenu && (
                <div 
                ref={(node) => (ref.current = node)}
                onClick={handleClick}
                className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black
                bg-opacity-50 flex flex-col items-end'
                >
                  <motion.div
                  initial={{x:20, opacity: 0,}}
                  animate={{x:0, opacity:1}}
                  transition={{duration:0.1}}
                  className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#271c19]
                  flex flex-col items-center px-4 py-10 relative'
                  >
                    <MdOutlineClose 
                    onClick={()=> setShowMenu(false)}
                    className='text-3xl text-textGreen cursor-pointer
                    hover:text-red-500 absolute top-4 right-4'/>
                    <div className='flex flex-col items-center gap-7'>
                      <ul className='flex flex-col text-base gap-7'>
                      <Link 
                     onClick={handleScroll}
                     href='#home'
                     className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{x: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}
                    >Home
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#about' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{x: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.2, delay: 0.1, ease: 'easeIn'}}>
                    <span className='text-textGreen'>01.</span> About
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#experience' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                     initial={{x: 20, opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{duration: 0.2, delay: 0.2, ease: 'easeIn'}}>
                    <span className='text-textGreen'>02.</span> Experience
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#projects' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                     initial={{x: 20, opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{duration: 0.2, delay: 0.3, ease: 'easeIn'}}>
                    <span className='text-textGreen'>03.</span> Projects
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#contact' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                     initial={{x: 20, opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{duration: 0.2, delay: 0.4, ease: 'easeIn'}}>
                    <span className='text-textGreen'>04.</span> Contact
                    </motion.li>
                    </Link>

                      </ul>
                      <a href='/assets/jlevyres.pdf' target='_blank'>
               <motion.button
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 transition={{delay: 0.5}}
                 className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                 hover:bg-hoverColor duration-300'
                 >
                    Resume
                    </motion.button>
                    
               </a>
                    <div className='flex gap-6 mt-12'>
                     <Tooltip content={'Github'} color='invert'>
                    <a href='https://github.com/BlockStrt' target='_blank'>
                        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                        items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                        transition-all duration-300'>
                            <TfiGithub/>
                        </span>
                    </a>
                    </Tooltip>
                    <Tooltip content={'LinkedIn'} color='invert'>
                    <a href='https://www.linkedin.com/in/joshlevylinked/' target='_blank'>
                        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                        items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                        transition-all duration-300'>
                            <TiSocialLinkedinCircular/>
                        </span>
                    </a>
                    </Tooltip>
                    <Tooltip content={'Instagram'} color='invert'>
                    <a href='https://www.instagram.com/blockstrt/' target='_blank'>
                        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                        items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                        transition-all duration-300'>
                            <TiSocialInstagramCircular/>
                        </span>
                    </a>
                    </Tooltip>
                    <Tooltip content={'Twitter'} color='invert'>
                    <a href='https://twitter.com/BlckStrtr' target='_blank'>
                        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                        items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                        transition-all duration-300'>
                            <TiSocialTwitterCircular/>
                        </span>
                    </a>
                    </Tooltip>
                    </div>
                </div>
                <motion.a
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay: 1.2, ease: 'easeIn'}}
                className='text-sm w-72 tracking-widest text-textgreen text-center mt-4'
                href='mailto:blockstarter34@gmail.com'
                >
                  <p>blockstarter34@gmail.com</p>
                </motion.a>
                </motion.div>
                </div>
              )
            }
        </div>
    </div>
  )
}

export default Navbar