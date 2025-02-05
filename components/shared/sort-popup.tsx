import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

type Props = {
  className?: string;
};

export const SortPopup = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className
      )}
    >
      <ArrowUpDown size={16} />
      <p>Sort:</p>
      <p className="text-primary">Most Popular</p>
    </div>
  );
};
