'use client';
import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
};

export const Categories = ({ className }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const cats = ['Pizzas', 'Breakfast', 'Coffee', 'Baverages', 'Desserts'];

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index &&
              'bg-white text-primary shadow-md shadow-gray-200'
          )}
        >
          <button onClick={() => setActiveIndex(index)}>{cat}</button>
        </a>
      ))}
    </div>
  );
};
