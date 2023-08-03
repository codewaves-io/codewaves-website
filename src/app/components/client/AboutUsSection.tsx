'use client';

import Image from 'next/image';
import traditionalLearning from '../../../../public/assets/traditional-learning.svg';
import Button from '../common/Button';

const AboutUsSection = () => {
  const handleLearnMore = () => {};

  return (
    <div className=' mt-44 flex min-h-112 w-full flex-col items-center xl:mt-0 xl:flex-row'>
      <div className='flex h-full w-full items-center justify-center xl:w-1/2'>
        <Image
          src={traditionalLearning}
          alt='Boost traditional learning'
          className='w-100'
        />
      </div>
      <div className='mt-40 flex h-full w-full flex-col items-center justify-center xl:mt-0 xl:w-1/2 xl:items-start'>
        <p className='mb-4 font-primary text-xl text-primary-500'>
          {' '}
          - Despre Noi
        </p>
        <h1 className='text-center font-playfair text-3xl font-bold text-primary-900 xl:text-left'>
          Studiaza cu ajutorul <br />
          <span className='italic text-primary-500'>tehnologiei</span> de care
          dispunem
        </h1>
        <p className='mb-8 mt-5 max-w-lg text-lg text-tcolor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl duis
          turpis id purus volutpat volutpat. Vitae pretium tincidunt varius amet
          massa. Mauris vitae quis purus eu fringilla facilisis pellentesque
          sed. Sit nunc in purus placerat laoreet nibh.
        </p>
        <Button onClick={handleLearnMore}>Afla mai mult</Button>
      </div>
    </div>
  );
};

export default AboutUsSection;
