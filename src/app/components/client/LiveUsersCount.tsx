'use client';

import Button from '../common/Button';

const LiveUsersCount = () => {
  const handleSignUp = () => {};

  return (
    <div className='flex w-full flex-col items-center px-8 py-24 xl:px-0'>
      <h1 className='mb-6 text-center font-playfair text-5xl font-bold text-primary-900'>
        Folosit activ de <span className='italic text-primary-500'>239</span>{' '}
        studenti
      </h1>
      <p className='mb-6 text-center font-primary text-lg text-tcolor'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius{' '}
        <br className='hidden xl:block' />
        neque necessitatibus doloremque, tempore sequi enim distinctio numquam{' '}
        <br className='hidden xl:block' />
        quisquam voluptate.
      </p>
      <Button onClick={handleSignUp}>Incepe acum</Button>
    </div>
  );
};

export default LiveUsersCount;
