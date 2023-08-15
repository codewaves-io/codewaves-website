import React from 'react';
import Image from 'next/image';

import icon1 from '../../../../public/assets/demo-icon-1.png';
import icon2 from '../../../../public/assets/demo-icon-2.png';
import icon3 from '../../../../public/assets/demo-icon-3.png';

const DemoSection = () => {
  return (
    <div className='relative mt-44 flex w-full flex-col items-center bg-primary-900 py-24'>
      <p className='mb-2 font-primary text-xl text-accent'>
        - Produsul Nostru -
      </p>
      <h1 className='mb-124 mb-24 text-center font-playfair text-5xl font-bold text-white'>
        Maximizează-ți potențialul <br /> cu sprijinul AI.
      </h1>
      <div className='mb-16 flex w-full flex-col items-center justify-around xl:flex-row'>
        <div className='mb-16 flex max-w-xs  flex-col items-center xl:mb-0'>
          <Image src={icon1} alt='Icon 1' className='w-25 h-25 mb-5' />
          <p className='mb-2 font-primary text-lg font-bold text-white'>
            1. Exerseaza mai eficient
          </p>
          <p className='text-md text-center font-primary text-white'>
            Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt
            donec vulputate ipsum erat lorem ipsum.
          </p>
        </div>
        <div className='mb-16 flex max-w-xs  flex-col items-center xl:mb-0'>
          <Image src={icon2} alt='Icon 1' className='w-25 h-25 mb-5' />
          <p className='mb-2 font-primary text-lg font-bold text-white'>
            2. Invata din greseli
          </p>
          <p className='text-md text-center font-primary text-white'>
            Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt
            donec vulputate ipsum erat lorem ipsum.
          </p>
        </div>
        <div className='mb-16 flex max-w-xs  flex-col items-center xl:mb-0'>
          <Image src={icon3} alt='Icon 1' className='w-25 h-25 mb-5' />
          <p className='mb-2 font-primary text-lg font-bold text-white'>
            3. Exerseaza mai eficient
          </p>
          <p className='text-md text-center font-primary text-white'>
            Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt
            donec vulputate ipsum erat lorem ipsum.
          </p>
        </div>
      </div>
      <p className='text-center font-playfair text-5xl font-bold text-accent'>
        . . . .
      </p>
      {/* Commented this section until we have a video demo to show */}
      {/* <div className='absolute -top-video h-videoH w-full max-w-video rounded-3xl bg-gray-300'></div> */}
    </div>
  );
};

export default DemoSection;
