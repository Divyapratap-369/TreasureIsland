"use client"
import React, {useState, useEffect, useRef} from 'react'
import { AudioHTMLAttributes } from 'react'
import { BiSolidVolumeMute } from 'react-icons/bi'
import { VscUnmute } from 'react-icons/vsc'
import useSound from 'use-sound'
import LayeredImage from '../LayeredImage'
const StartGame = () => {
 const [isPlaying, setIsPlaying] = useState(false);
 const [play, { stop }] = useSound("/sounds/thunderstorm.mp3");
 

 const handleClick = () => {
   setIsPlaying(!isPlaying);
   if (isPlaying) {
     stop();
   } else {
     play();
   }
 };
 const icon = isPlaying ? (
   <BiSolidVolumeMute size={50} color="white" />
 ) : (
   <VscUnmute size={50} color="white" />
 );
  return (
    <div>
      <LayeredImage />
      <div className="fixed top-8 right-8 ">
        <button onClick={handleClick}>{icon}</button>
      </div>
    </div>
  );
}

export default StartGame