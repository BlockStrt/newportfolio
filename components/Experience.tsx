import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Hammer from './works/Hammer';
import Jug from './works/Jug';
import HalfEvil from './works/HalfEvil';
import Anniversary from './works/Anniversary';

function Experience() {
    const [workHammer, setWorkHammer] = useState(true);
    const [workHalf, setWorkHalf] = useState(false);
    const [workJug, setWorkJug] = useState(false);
    const [workAnni, setWorkAnni] = useState(false);

    const handleHammer = () => {
        setWorkHammer(true);
        setWorkHalf(false);
        setWorkJug(false);
        setWorkAnni(false);
        }
    const handleHalf = () => {
        setWorkHammer(false);
        setWorkHalf(true);
        setWorkJug(false);
        setWorkAnni(false);
        }
    const handleJug = () => {
        setWorkHammer(false);
        setWorkHalf(false);
        setWorkJug(true);
        setWorkAnni(false);
        }
    const handleAnni = () => {
        setWorkHammer(false);
        setWorkHalf(false);
        setWorkJug(false);
        setWorkAnni(true);
        }

  return (
    <section 
    id='experience'
    className=' max-w-container mx-auto py-10 lgl:py-24 px-4 md:flex-col-reverse md:flex ' >
        <SectionTitle title='Work Experience' titleNo='02'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16 '>
            <ul className='md:w-32 flex flex-col'>
                <li
                onClick={handleHammer}
                 className={`${
                    workHammer 
                    ? "border-l-textGreen text-textGreen" 
                    : " border-l-[#000] text-textDark"
                }
                  border-l-2 border-l-textDark text-textDark  bg-transparent hover:bg-[#55423d] py-3 text-sm
                 cursor-pointer duration-300 px-8 font-medium`}>
                    Hammer&Hope
                </li>
                <li 
                onClick={handleJug}
                className={`${
                    workJug 
                    ? "border-l-textGreen text-textGreen" 
                    : " border-l-[#000] text-textDark"
                }
                  border-l-2 border-l-textDark text-textDark  bg-transparent hover:bg-[#55423d] py-3 text-sm
                 cursor-pointer duration-300 px-8 font-medium`}>
                    Jugrnuat
                </li>
                <li 
                onClick={handleHalf}
                className={`${
                    workHalf
                    ? "border-l-textGreen text-textGreen" 
                    : " border-l-[#000] text-textDark"
                }
                  border-l-2 border-l-textDark text-textDark  bg-transparent hover:bg-[#55423d] py-3 text-sm
                 cursor-pointer duration-300 px-8 font-medium`}>
                    Half Evil
                </li>
                <li 
                onClick={handleAnni}
                className={`${
                    workAnni 
                    ? "border-l-textGreen text-textGreen" 
                    : " border-l-[#000] text-textDark"
                }
                  border-l-2 border-l-textDark text-textDark  bg-transparent hover:bg-[#55423d] py-3 text-sm
                 cursor-pointer duration-300 px-8 font-medium`}>
                    Anniversary Group
                </li>
            </ul>
            {workHammer && <Hammer/>}
            {workHalf && <HalfEvil/>}
            {workJug && <Jug/>}
            {workAnni && <Anniversary/>}

        </div>
        </section>
  )
}

export default Experience;