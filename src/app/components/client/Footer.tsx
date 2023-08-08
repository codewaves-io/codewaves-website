'use client';

import Button from '../common/Button';

const Footer = () => {
  return (
    <footer className='w-full bg-primary-900'>
      <div className='flex w-full items-center justify-between border-t border-solid border-tcolor px-24 py-6'>
        <p className='text-md font-primary font-thin text-white'>
          Built with ♥️ in Cluj-Napoca.
        </p>
        <Button onClick={() => {}}>Afla mai multe</Button>
      </div>
      <div className='border-1 flex w-full items-center justify-between border-t border-solid border-tcolor px-24 py-6'>
        <h1 className='font-playfair text-4xl font-bold text-white'>
          CodeWaves.
        </h1>
        <p className='text-md font-primary font-thin text-white'>
          &copy; {new Date().toLocaleDateString()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
