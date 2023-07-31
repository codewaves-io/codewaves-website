'use client';

import React, { useMemo } from 'react';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'primary' | 'outlined';
  style?: string;
};

const Button = ({ children, type = 'primary', onClick, style }: Props) => {
  const classes = useMemo(() => {
    const bg = type === 'primary' ? 'primary-500' : 'transparent';
    const textColor = type === 'primary' ? 'white' : 'primary-500';
    const activeColor = type === 'primary' ? 'primary-900' : 'primary-500';

    const twClasses = `ease-in border border-2 active:bg-${activeColor} active:text-white border-solid border-primary-500 bg-${bg} px-10 py-5 text-${textColor}`;

    return twClasses + ` ${style}`;
  }, [type, style]);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
