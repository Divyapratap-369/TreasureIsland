"use client"

import React, { useState } from 'react'
import { VscUnmute } from "react-icons/vsc";
import { BiSolidVolumeMute } from "react-icons/bi";
import {useSound} from 'use-sound'
const Sounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
    const [play, {stop}] = useSound('/sounds/sound.mp3');
    const handleClick = () =>{
      setIsPlaying(!isPlaying);
      if(isPlaying){
        stop();
      }else{
        play();
      }
    };
    const icon = isPlaying ? <BiSolidVolumeMute size={50} color="white"/> : <VscUnmute size={50} color="white"/>;
  return (
    <div className='fixed top-8 right-8 '>
      <button onClick={handleClick}>
        {icon}
        </button>
    </div>
  );
}

export default Sounds