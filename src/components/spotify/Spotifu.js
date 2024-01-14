import { motion } from "framer-motion";

export default function Spotifu() {
  
  const item = {
    hidden: { opacity: 0, y: 200 },
    show: { opacity: 2, y: 0,
    transition:{
      duration:2
    } }
  }
  
    return (
     
      <motion.main variants={item}
      initial="hidden"
      animate="show" 
      className=" h-[20rem] rounded-xl shadow-2xl bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg flex flex-col  max-w-3xl font-bold">
          <div className=' pt-2 pb-2 pl-3 rounded-t-xl w-full bg-topba bg-opacity-60 backdrop-filter backdrop-blur-lg h-6 flex items-center'>
            <div className=' bg-mxim mr-2 rounded-full w-4 h-4'></div>
            <div className=' bg-minm mr-2 rounded-full w-4 h-4'></div>
            <div className=' bg-clcs rounded-full w-4 h-4'></div>
          </div>
          <iframe src="https://open.spotify.com/embed/track/2Ch7LmS7r2Gy2kc64wv3Bz?utm_source=generator"  frameBorder="0" allowtransparency="true" allow="encrypted-media" className='w-[34.5rem]  h-full rounded-b-lg'></iframe>
        </motion.main>
    );
  }
  