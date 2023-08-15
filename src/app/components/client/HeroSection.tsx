'use client';

import Image from 'next/image';
import heroImg from '../../../../public/assets/hero.svg';

import Button from '../common/Button';

const HeroSection = () => {
  const handleLearnMore = () => {};
  const handleSignUp = () => {};

  return (
    <div className='flex h-112 w-full bg-secondary'>
      <div className='box-border flex h-full w-full flex-col items-center justify-center px-8 xl:w-1/2 xl:items-start xl:px-0 xl:pl-24'>
        <h1 className='mb-10 text-center font-playfair text-5xl font-bold text-primary-900 xl:text-left'>
          Invata pentru examenul de{' '}
          <span className='italic text-primary-500'>bacalaureat</span> cu
          ajutorul <br className='hidden xl:block' /> unui model de{' '}
          <span className='italic text-primary-500'>AI</span>
        </h1>
        <p className='font-fairplay text-center text-tcolor xl:text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <br className='hidden xl:block' /> Faucibus ante velit nunc morbi
          pretium. Ut nullam dolor, <br className='hidden xl:block' />
          pulvinar proin viverra ullamcorper ac, eget.
        </p>
        <div className='mt-8 flex flex-col xl:flex-row'>
          <Button onClick={handleLearnMore}>Inregistreaza-te</Button>
          <Button
            style='mt-7 ml-0 xl:mt-0 xl:ml-7 w-full xl:w-fit'
            type='outlined'
            onClick={handleSignUp}
          >
            Afla mai mult
          </Button>
        </div>
      </div>
      <div className='hidden w-full items-center justify-center xl:flex xl:w-1/2'>
        <Image src={heroImg} alt='Hero section image ' className=' w-104' />
      </div>
    </div>
  );
};

export default HeroSection;
