import { motion } from "framer-motion"
import {GiChemicalArrow} from 'react-icons/gi'
const HalfEvil = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{delay: 0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Web Developer <span className="text-textGreen tracking-wide">@Half Evil</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Sep 2021 - Nov 2021</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Advocate for UI design built on Shopify
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Implemented Shopify look book carousel for view of collection items
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Improved readability for visually impaired users
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Organic web traffic over 20k+ users
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Connecticut based clothing brand
            </li>
        </ul>
        </motion.div>
  )
}

export default HalfEvil