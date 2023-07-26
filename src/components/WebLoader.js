import React from 'react'
import { motion } from 'framer-motion'

export default function WebLoader() {


globalThis.window?.addEventListener('load', () => {
        console.log('loaded')
        const loader = document.querySelector('.loader');
        setTimeout(()=> {loader.style.display = 'none'}, 3000);
        
})


    return (
        <div className="loader fixed z-50 bg-[#161618] flex-col ">
            <div className=' absolute w-screen h-full flex justify-center'>
               
            </div>
            <div className=" flex flex-col h-screen w-screen justify-center items-center">
                <motion.img 
                animate={{y: -100}}
                transition={{ repeat: Infinity ,repeatType: "reverse",duration: 1}}
                className="top-[20vh] absolute h-[20vh]" src="/photos/load.gif" alt="" />
                <motion.h1 
                animate={{y: -100}}
                transition={{delay:0.2, repeat: Infinity ,repeatType: "reverse",duration: 1}} className=" font-montserrat font-bold italic text-9xl absolute" >LOADING...</motion.h1>
                <motion.h2 
                animate={{y: -100}}
                transition={{delay:0.2, repeat: Infinity ,repeatType: "reverse",duration: 1}}
                className=" font-montserrat font-bold italic text-gray-900 text-9xl absolute">LOADING ...</motion.h2>
                <motion.h1 
                animate={{y: -100}}
                transition={{delay:0.1, repeat: Infinity ,repeatType: "reverse",duration: 1}} className=" font-montserrat font-bold italic text-9xl absolute" >LOADING...</motion.h1>
                <motion.h2 
                animate={{y: -100}}
                transition={{delay:0.1, repeat: Infinity ,repeatType: "reverse",duration: 1}}
                className=" font-montserrat font-bold italic text-gray-500 text-9xl absolute">LOADING ...</motion.h2>
                <motion.h1 
                animate={{y: -100}}
                transition={{ repeat: Infinity ,repeatType: "reverse",duration: 1}} className=" font-montserrat font-bold italic text-9xl absolute" >LOADING...</motion.h1>
                <motion.h2 
                animate={{y: -100}}
                transition={{ repeat: Infinity ,repeatType: "reverse",duration: 1}}
                className=" font-montserrat font-bold italic text-white text-9xl absolute">LOADING ...</motion.h2>
            </div>
        </div>
    )
}
