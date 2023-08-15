'use client';

import React, { useMemo } from 'react';
import '../../styles/navbar.css';

type Props = {
  opened: boolean;
};

export const MobileMenu = ({ opened }: Props) => {
  const classes = useMemo(() => {
    return `nav-menu bg-secondary ${opened ? 'opened' : ''}`;
  }, [opened]);

  return (
    <div className={classes}>
      <div className='flex h-full w-full flex-col items-center justify-center [&>p]:mb-8 [&>p]:cursor-pointer [&>p]:font-playfair [&>p]:text-5xl [&>p]:font-bold [&>p]:text-tcolor'>
        <p>Acasa</p>
        <p>Despre Noi</p>
        <p>Proces</p>
        <p>Contact</p>
      </div>
    </div>
  );
};
