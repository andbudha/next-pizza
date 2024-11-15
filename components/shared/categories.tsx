'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

type Props = {
  className?: string;
};

export const Categories = ({ className }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const cats = [
    'Pizzas',
    'Combo',
    'Scnacks',
    'Cocktails',
    'Coffee',
    'Baverages',
    'Desserts',
  ];
  const changeActiveIndexHandler = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn(
            'flex items-center font-bold, h-11 rounded-2xl px-5',
            activeIndex === index &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
        >
          <button onClick={() => changeActiveIndexHandler(index)}>
            {' '}
            {cat}
          </button>
        </a>
      ))}
    </div>
  );
};
