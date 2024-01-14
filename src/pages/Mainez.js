import Head from 'next/head';
import Photu from '../components/photo/Photu'; 
import Terms from '../components/terminal/Terms';
import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import Spotifu from '../components/spotify/Spotifu';
import Resume from '../components/resume/Resume';


export default function Mainez() {
  const taskbar = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1, y:0,
      transition: {
        duration: 2,
        delayChildren: 2,
        staggerChildren: 0.3,
      }
    }
  }
  
  const logos = {
    hidden: { y: -500 },
    show: { y: 0 }
  }
  const constraintsRef = useRef(null);
  const url1 = "https://source.unsplash.com/1980x1080/?dark-wallpaper?sig=123"
  const url2= "https://source.unsplash.com/1980x1080/?dark-wallpaper?sig="+ new Date().getTime();
  
  const [background, setBackground] = useState(url1)

  const setStyle = () => {
    
    setBackground(url2);
  };

  const [term,setTerm]=useState(true)
  const [photo,setPhoto]=useState(false)
  const [spotify,setSpotify]=useState(false)
  const [resume,setResume]=useState(false)
  return (
  <div style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundRepeat:" no-repeat"}} >
  <div className="overflow-hidden bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center w-full" ref={constraintsRef}>
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Yajush Vyas Portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <motion.div drag dragConstraints={constraintsRef}>
      {  
        term?<Terms/>:null
      }
    </motion.div>
    <motion.div drag dragConstraints={constraintsRef} >
      {
        photo?<Photu/>:null 
      }
    </motion.div>
    <motion.div drag dragConstraints={constraintsRef} >
      {
        spotify?<Spotifu/>:null 
      }
    </motion.div>
    <motion.div drag dragConstraints={constraintsRef}>
      {
        resume?<Resume/>:null 
      }
    </motion.div>
    <div className="hidden fixed shadow-xl place-items-center md:flex justify-between top-0 h-[1.5rem] w-full bg-black bg-opacity-70 backdrop-filter backdrop-blur">
      <div className="flex h-full">  
        <span className=" pl-4 pr-4 font-Quicksand  font-extrabold text-white"> YJ </span>
        <div className="h-full w-[1px] bg-white bg-opacity-10"> </div>
        <span className=" pl-5 font-Quicksand font-light text-white"> Yajush </span>
      </div>
      <button onClick={() =>  setStyle()} >
        <img src= "/images/ref.png" className="invert pr-5 h-[1rem]"/>
      </button>
    </div>
    <motion.div   variants={taskbar}
    initial="hidden"
    animate="show"
    className='hidden overflow-hidden fixed shadow-2xl h-[4rem] md:flex gap-4 justify-center bottom-0 w-[40%] bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg place-items-center rounded-t-2xl '>
      <motion.button variants={logos} onClick={()=>setTerm(true)&setPhoto(false)&setSpotify(false)&setResume(false)}>
        <img src="/images/logo/af.png" className='  h-14 hover:h-[4.5rem] pt-2 duration-500 pb-2'/>
      </motion.button>
      <motion.button variants={logos} onClick={()=>setTerm(false)&setPhoto(true)&setSpotify(false)&setResume(false)}>
        <img src="/images/logo/pho.jpg" className='  h-[3.4rem] hover:h-[4.5rem] duration-500 pt-[0.6rem] pb-2'/>
      </motion.button>
      <motion.button variants={logos} onClick={()=>setTerm(false)&setPhoto(false)&setSpotify(true)&setResume(false)}>
        <img src="/images/logo/spotify.png" className='  h-[3.4rem] hover:h-[4.5rem] duration-500 pt-[0.6rem] pb-2'/>
      </motion.button>
      <motion.button variants={logos} onClick={()=>setTerm(false)&setPhoto(false)&setSpotify(false)&setResume(true)}>
        <img src="/images/logo/pg.png" className='  h-[3.4rem] hover:h-[4.5rem] duration-500 pt-[0.6rem] pb-2'/>
      </motion.button>
    </motion.div>
  </div>
  </div>
  )
}
