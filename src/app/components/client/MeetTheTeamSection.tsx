import React from 'react';

import Image from 'next/image';
import FbIcon from '../../../../public/assets/facebook-icon.svg';
import TwitterIcon from '../../../../public/assets/twitter-icon.svg';
import InstaIcon from '../../../../public/assets/instagram-icon.svg';

const MeetTheTeamSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-secondary py-24'>
      <p className='mb-2 font-primary text-xl text-primary-500'>
        - Cine suntem ? -
      </p>
      <h1 className='mb-16 text-center font-playfair text-5xl font-bold text-primary-900'>
        Intalneste echipa <br />
        din spatele <span className='italic text-primary-500'>Codewaves</span>
      </h1>
      <div className='flex w-full flex-wrap justify-around'>
        <div className='mb-12 flex flex-col'>
          <div className='mb-4 h-80 w-80 rounded bg-gray-300'></div>
          <p className='font-primary text-3xl font-bold text-primary-900'>
            Rares Modure
          </p>
          <p className='mb-1 font-primary text-lg text-tcolor'>Co-Founder</p>
          <div className='flex items-center'>
            <Image src={FbIcon} alt='Facebook' className='mr-2 h-4 w-4' />
            <Image src={TwitterIcon} alt='Twitter' className='mr-2 h-4 w-4' />
            <Image src={InstaIcon} alt='Instagram' className=' h-4 w-4' />
          </div>
        </div>
        <div className='mb-12 flex flex-col'>
          <div className='mb-4 h-80 w-80 rounded bg-gray-300'></div>
          <p className='font-primary text-3xl font-bold text-primary-900'>
            Teodor Filp
          </p>
          <p className='mb-1 font-primary text-lg text-tcolor'>Co-Founder</p>
          <div className='flex items-center'>
            <Image src={FbIcon} alt='Facebook' className='mr-2 h-4 w-4' />
            <Image src={TwitterIcon} alt='Twitter' className='mr-2 h-4 w-4' />
            <Image src={InstaIcon} alt='Instagram' className=' h-4 w-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamSection;
