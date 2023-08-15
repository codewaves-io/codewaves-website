'use client';

import React, { useMemo } from 'react';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'primary' | 'outlined';
  style?: string;
};

const Button = ({ children, type = 'primary', onClick, style }: Props) => {
  const variants = useMemo(
    () => ({
      primary: `w-fit ease-in border border-2 active:bg-primary-900 transition-all hover:bg-primary-700 rounded active:text-white border-solid border-primary-500 bg-primary-500 px-10 py-5 text-white`,
      outlined: `w-fit ease-in border border-2 active:bg-primary-500 transition-all hover:bg-primary-100 active:text-white rounded border-solid border-primary-500 bg-transparent px-10 py-5 text-primary-500`,
    }),
    []
  );

  const classes = useMemo(() => {
    return variants[type] + ` ${style}`;
  }, [type, style, variants]);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
