"use client"
import React from 'react'
import Link from 'next/link'
import useSound from 'use-sound'

const GameControl = () => {
  const [play, {error}] = useSound('/sounds/click-button.mp3');
 

  const handleClickStartGame = () => {
    play();
    console.log('Button Clicked'); 
  }
  const handleClickMap = () => {
    play();
    console.log('Map Button Clicked');
  }
  const handleClickSetting = () => {
    play();
    console.log('Settings Button Clicked');
  }
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <Link href="./Controls/StartGame.tsx">
        <button
          onClick={handleClickStartGame}
          className=" w-60 h-14  
      text-grey
      text-xl
      bg-hoverColor 
      border border-2 border-grey
      rounded-md
      font-bold
      tracking-widest
      hover:bg-yellow-100 hover:bg-opacity-50 mb-4"
        >
          Start Game
        </button>
      </Link>
      <Link href="./Controls/GameMap.tsx">
        <button
          onClick={handleClickMap}
          className=" w-60 h-14  
      text-grey
      text-xl
      bg-hoverColor 
      border border-2 border-grey
      rounded-md
      font-bold
      tracking-widest
      hover:bg-yellow-100 hover:bg-opacity-50 mb-4"
        >
          Map
        </button>
      </Link>
      <Link href="./Controls/Settings.tsx">
        <button
          onClick={handleClickSetting}
          className="w-60 h-14  
      text-grey
      text-xl
      bg-hoverColor 
      border border-2 border-grey
      rounded-md
      font-bold
      tracking-widest
      hover:bg-yellow-100 hover:bg-opacity-50"
        >
          Settings
        </button>
      </Link>
    </div>
  );
}


export default GameControl; 