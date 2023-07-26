'use client'



import React, {useState} from 'react'
import WebLoader from './WebLoader'
import Terminal from './Terminal'

export default function WebBackground() {

const [Backg, setBackg] = useState("https://source.unsplash.com/1980x1080/?dark-wallpaper")



	return (
		<>
			<WebLoader />
			<Terminal />
			<div className="z-20 bg-purple w-screen h-screen opacity-5 absolute"></div>
			<div className=" " style={{backgroundImage: `url(${Backg})`, backgroundRepeat:'no-repeat',backgroundSize: 'cover' , width: '100%', height: '100vh'}}></div>
		</>
	)
}
