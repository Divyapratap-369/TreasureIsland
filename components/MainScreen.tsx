import React from 'react'
import Image from 'next/image';
import { Maintheme } from '@/public/assets/images';
const MainScreen = () => {
  return (
    <div className="w-full h-screen relative overflow-y-hidden">
      <Image
        layout="fill"
        className="object-cover rounded-lg"
        src={Maintheme}
        alt="MyImage"
      />
      <h1 className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-palmGreen text-center text-4xl font-bold pb-20 tracking-widest'>
        Treasure Island
      </h1>
    </div>
  );
}

export default MainScreen