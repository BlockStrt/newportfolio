import {TfiGithub} from 'react-icons/tfi'
import { Tooltip } from '@nextui-org/react'
import {TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialTwitterCircular} from 'react-icons/ti'




function LeftSide() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4
    text-textLight'>
      <div className='flex flex-col gap-4'>
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
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide