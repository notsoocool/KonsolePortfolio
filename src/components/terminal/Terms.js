import Terminal from "./components/Terminal";

import { motion } from "framer-motion";

export default function Terms() {
  const item = {
    hidden: { opacity: 0, y: 200 },
    show: { opacity: 2, y: 0,
    transition:{
      duration:2
    } }
  }
  
    return (
     <>
        <motion.main variants={item}
        initial="hidden"
        animate="show"
        className="hidden rounded-xl shadow-2xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg md:flex flex-col w-[55rem] font-bold">
        <div className="   rounded-t-lg w-full h-5 bg-black flex justify-around items-center">
					<div>

					</div>
					<span className=" text-white text-[0.6rem]">~:portfolio - Konsole</span>
					<div>

					</div>
				</div>
        <div className='pr-4 pl-4'>
          <h1>
            :$ <span className=" text-hotpink">type help to start</span>
          </h1>
          
        <Terminal/>
        </div>
        </motion.main>
        <main className="md:hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col font-bold">
        <div className="   rounded-t-lg w-full h-5 bg-black flex justify-around items-center">
					<div>

					</div>
					<span className=" text-white text-[0.6rem]">~:portfolio - Konsole</span>
					<div>

					</div>
				</div>
        <div className='pr-4 pl-4'>
          <h1>
            :$ <span className=" text-txtc">type help to start</span>
          </h1>
          
        <Terminal/>
        </div>
        </main>
      </>
    );
  }
  
