
import React from 'react'
import Image from 'next/image'
import useSound from 'use-sound'
import { storyline } from '@/public/assets/images'
import {easeInOut, motion} from 'framer-motion'
import {scrollimg} from "@/public/assets/images"

interface LayeredImageProps{
  onClick?:() => void;
}

const LayeredImage = ({onClick}) => {
    
    const textVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 2, ease: easeInOut}},
    };
    
    const buttonVisible = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 10, ease: easeInOut}},
    };
    
    const [play, { error }] = useSound("/sounds/click-button.mp3");

    const ButtonClicked = () => {
      play();
      onClick?.();
      console.log("Button Clicked");
    };
  return (
    <div>
      <Image
        src={storyline}
        alt="Island Image"
        className="island-image"
        layout="fill"
        priority
      />
      <div className="scroll-container">
        <Image
          src={scrollimg}
          alt="Scroll Image"
          className="scroll-image"
          layout="fill"
        />

        <motion.p
          className="text text-grey font-bold text-xl tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          overflow-ellipsis sm:text-base"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          You are Kai, a seasoned sailor haunted by whispers of a legendary lost
          city - El Dorado, rumored to be overflowing with gold. Driven by a
          thirst for adventure and a chance to rewrite his past, Kai sets sail
          with a ragtag crew. During the voyage, a sudden and violent storm
          tears through the ship, throwing Kai overboard. He awakens on a
          mysterious island, the sole survivor. The wreckage of his ship litters
          the shore, a constant reminder of the tragedy. As Kai explores the
          island, he discovers remnants of an ancient civilization - crumbling
          structures, cryptic carvings, and strange artifacts. The island itself
          holds secrets. Lush jungles teem with exotic wildlife, some friendly,
          some not. Hidden caves whisper promises of forgotten treasures.
        </motion.p>
        <div className="absolute bottom-1/4 right-1/2 ">
          <motion.button
            variants={buttonVisible}
            initial="hidden"
            animate="visible"
            onClick={ButtonClicked}
            className="text-xl font-bold tracking-wider bg-brown border border-fontColor-300 rounded-s px-4 py-2 shadow-md relative overflow-hidden"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default LayeredImage