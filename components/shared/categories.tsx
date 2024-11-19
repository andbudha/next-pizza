'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React, { useState } from 'react';

type Props = {
  className?: string;
};

export const Categories = ({ className }: Props) => {
  const activeId = useCategoryStore().activeId;
  const setActiveId = useCategoryStore().setActiveId;
  const cats = [
    { id: 1, name: 'Pizzas' },
    { id: 2, name: 'Breakfast' },
    { id: 3, name: 'Scnacks' },
    { id: 4, name: 'Cocktails' },
    { id: 5, name: 'Coffee' },
    { id: 6, name: 'Baverages' },
    { id: 7, name: 'Desserts' },
  ];
  const changeActiveIndexHandler = (categoryId: number) => {
    setActiveId(categoryId);
  };
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => (
        <a
          href={`#${cat.name}`}
          key={index}
          className={cn(
            'flex items-center font-bold, h-11 rounded-2xl px-5',
            activeId === cat.id &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
        >
          <button onClick={() => changeActiveIndexHandler(cat.id)}>
            {' '}
            {cat.name}
          </button>
        </a>
      ))}
    </div>
  );
};
