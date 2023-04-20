import { motion } from "framer-motion"
import {GiChemicalArrow} from 'react-icons/gi'
const Jug = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{delay: 0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Web Developer <span className="text-textGreen tracking-wide">@Jugrnaut</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Dec 2021 - feb 2022</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Improved UI by implementing WP webhooks allowing near-real-time data updates from server to client rather than unnecessary API calls by the client to server
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Worked alongside store updating UI for the new summer catalgoue
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Organic web traffic over 10k+ Monthly visits
            </li>
            <li className="text-base flex gap-2 text-textDark mt-2">
                <span className="text-textGreen"><GiChemicalArrow/></span>{" "}
                Recieved a chance to make use of PHP customizing the UI to my liking
            </li>
        </ul>
        </motion.div>
  )
}

export default Jug