'use client';
import { cn } from '@/lib/utils';
import React from 'react';

type Variant = {
  value: string;
  name: string;
  disabled?: boolean;
};
type Props = {
  className?: string;
  onClick?: (value: Variant['value']) => void;
  items: readonly Variant[];
  selectedValue?: Variant['value'];
};

export const GroupVariants = ({
  className,
  items,
  selectedValue,
  onClick,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        'flex justify-between bg-[#F3F3F7 rounded-3xl p-1 select-none] border border-gray-200'
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          disabled={item.disabled}
          onClick={() => onClick && onClick(item.value)}
          className={cn(
            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl trabsition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
