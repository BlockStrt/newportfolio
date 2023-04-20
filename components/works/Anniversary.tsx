import { motion } from "framer-motion"
import {GiChemicalArrow} from 'react-icons/gi'
const Anniversary = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{delay: 0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Web Developer <span className="text-textGreen tracking-wide">@Anniversary group</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">May 2022 - Present</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Parent company distributing to DSP`s & merchandise
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Artist Management for artist with over 2Million+ streams across all platforms
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Event Marketing & Branding (Recently Partnered with Jack Daniels)
            </li>
        </ul>
        </motion.div>
  )
}

export default Anniversary