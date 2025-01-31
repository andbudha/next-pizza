'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import React from 'react';

type Props = {
  className?: string;
  categories: Category[];
};

export const Categories = ({ className, categories }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map((cat, id) => (
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
