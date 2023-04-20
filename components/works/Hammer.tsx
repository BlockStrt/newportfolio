import { motion } from "framer-motion"
import {GiChemicalArrow} from 'react-icons/gi'
const Hammer = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{delay: 0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Web Developer <span className="text-textGreen tracking-wide">@Hammer&Hope</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">June 2022 - Sept 2022</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
            Advocate alongside team designing UI
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Retrieved some issue data, HomePageData, from our CMS allowing the UI to update automatically using state
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Improved UI with use of SASS modules & global styling avoiding arbitrary % values maintaining the responsiveness of the UI
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Unlocked new technologies such as Next.JS, Vercel, & Sanity.JS improving deployment, productivity, & solutions for client to navigate through the CMS with ease.
            </li>
        </ul>
        </motion.div>
  )
}

export default Hammer