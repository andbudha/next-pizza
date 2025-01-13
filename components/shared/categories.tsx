'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

type Props = {
  className?: string;
};

export const Categories = ({ className }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const cats = [
    { id: 1, name: 'Pizzas' },
    { id: 2, name: 'Breakfast' },
    { id: 3, name: 'Coffee' },
    { id: 4, name: 'Baverages' },
    { id: 5, name: 'Desserts' },
  ];
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, id) => (
        <a
          key={id}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id + 1 &&
              'bg-white text-primary shadow-md shadow-gray-200'
          )}
          href={`/#${cat.name}`}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
