
import React,{useState} from 'react'
import {motion, useMotionValue, useAnimation} from 'framer-motion'
import LayeredImage from './LayeredImage'
import LayeredVideo from './LayeredVideo'

// const imageVariant = {
//   visible: {opacity: 1, scale: 1},
//   hidden: {opacity: 0, scale: 0.9},
// };

// const videoVariant = {
//   visible: {opacity:1 ,y:0},
//   hidden: {opacity:0, y:'100%' },
// };

const ContentSwitcher = () => {
    
    const [isImageVisible, setIsImageVisible] = useState(true);
    // const imageAnimation = useAnimation();
    // const videoAnimation = useAnimation();

    

    const handleNextClick = () => {
        setIsImageVisible(false);

    // if(isImageVisible){
    //   imageAnimation.start('hidden');
    //   videoAnimation.start('visible');
    // }else{
    //   imageAnimation.start('visible');
    //   videoAnimation.start('hidden');
    // }
  }
  return (
    <div>
      {isImageVisible ? (
        <LayeredImage onClick={handleNextClick} />
      ) : (
        <LayeredVideo />
      )}
      {/* <motion.div
        animate={imageAnimation}
        variants={imageVariant}
        className="w-full h-full rounded-lg overflow-hidden"
      > */}
      {/* <LayeredImage onClick={handleNextClick} /> */}
      {/* </motion.div> */}
      {/* <motion.div
        animate={videoAnimation}
        variants={videoVariant}
        className="w-full h-full rounded-lg overflow-hidden"
      > */}
      {/* <LayeredVideo /> */}
      {/* </motion.div> */}
    </div>
  );
}

export default ContentSwitcher