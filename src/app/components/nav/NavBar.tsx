'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';

import Logo from '../../../../public/assets/logo-small.svg';
import LogoBig from '../../../../public/assets/logo-big.png';
import { MobileMenu } from './MobileMenu';

export const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className='sticky top-0 z-50 flex h-24 w-full items-center justify-between border-b  border-solid border-accent bg-secondary px-8 xl:px-24'>
      <Image
        src={Logo}
        alt={'CodeWaves Logo'}
        className='block h-32 w-32 xl:hidden'
      />
      <Image
        src={LogoBig}
        alt={'CodeWaves Logo'}
        className='hidden h-14 w-auto xl:block'
      />
      <div className='block xl:hidden'>
        <Hamburger toggled={isOpened} toggle={setIsOpened} color='#575A7B' />
        <MobileMenu opened={isOpened} />
      </div>
      <ul
        id='nav-list'
        className='hidden w-80 list-none text-center xl:table [&>li>a]:font-primary [&>li>a]:font-bold [&>li>a]:uppercase [&>li>a]:text-tcolor [&>li]:relative [&>li]:table-cell'
      >
        <li className='list-item'>
          <a href='#'>Acasa</a>
        </li>
        <li className='list-item'>
          <a href='#'>Despre Noi</a>
        </li>
        <li className='list-item'>
          <a href='#'>Proces</a>
        </li>
        <li className='list-item'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
