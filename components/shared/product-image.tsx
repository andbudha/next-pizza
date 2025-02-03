import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
  imageUrl: string;
  size: number;
};

export const ProductImage = ({ className, imageUrl, size }: Props) => {
  return (
    <div className={className}>
      <img
        src={imageUrl}
        alt="product-image"
        className={cn(
          'relative left-2 top-2 transition-all z-10 duration-300',
          {
            'w-[280px] h-[280px]': size === 28,
            'w-[330px] h-[330px]': size === 33,
          }
        )}
      />
      <div className="absolute border-dashed border-2 rounded-full border-gray-200 w-[300px] h-[300px] "></div>
    </div>
  );
};
