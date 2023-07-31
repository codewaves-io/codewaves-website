'use client';

import Image from 'next/image';
import heroImg from '../../../../public/assets/hero.svg';

import Button from '../common/Button';

const HeroSection = () => {
  const handleLearnMore = () => {};
  const handleSignUp = () => {};

  return (
    <div className='flex h-112 w-full bg-secondary'>
      <div className='box-border flex h-full w-full flex-col justify-center  xl:w-1/2 xl:pl-24'>
        <h1 className='mb-10 font-playfair text-5xl font-bold text-primary-900'>
          Invata pentru examenul de{' '}
          <span className='italic text-primary-500'>bacalaureat</span> cu
          ajutorul <br /> unui model de{' '}
          <span className='italic text-primary-500'>AI</span>
        </h1>
        <p className='font-fairplay text-tcolor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
          Faucibus ante velit nunc morbi pretium. Ut nullam dolor, <br />
          pulvinar proin viverra ullamcorper ac, eget.
        </p>
        <div className='mt-8 flex'>
          <Button onClick={handleLearnMore}>Inregistreaza-te</Button>
          <Button style='ml-7' type='outlined' onClick={handleSignUp}>
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
