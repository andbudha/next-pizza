import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
};

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Link href={`/product/${1}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] w-[260px]">
          <img
            src={imageUrl}
            alt="card-image"
            className="w-[215px] h-[215px]"
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          flour, salt, water, yeast, tomatos, alive-oil, mozzarella, basil.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            <b>{price} €</b>
          </span>
          <Button variant={'secondary'}>
            <Plus size={20} className=" mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
