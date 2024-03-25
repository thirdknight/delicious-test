import Popular from "../componentes/Popular";
import Veggie from "../componentes/Veggie";
import { motion } from "framer-motion";

function Home() {
  return(
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duraction: 1.5}} 
    >
      <Veggie />
      <Popular />
    </motion.div>
  )
}

export default Home;