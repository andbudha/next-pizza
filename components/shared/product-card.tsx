import Link from 'next/link';
import React from 'react';
import Pizza from '../../public/pizza.png';
import Image from 'next/image';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

type Props = {
  className?: string;
  id: number;
  price: number;
  imageUrl: string;
  name: string;
};

export const ProductCard = ({
  className,
  id,
  price,
  imageUrl,
  name,
}: Props) => {
  return (
    <div className=" h-[440px] w-[260px]">
      <Link href={'/product/1'} className="w-[260px]">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] w-[260px] border">
          <Image src={imageUrl || Pizza} alt="pizza" height={200} width={200} />
        </div>
      </Link>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">
        Tomato, Cheese, Pepperoni, Olives, Onions, Sausage, Bacon, Mushrooms,
        Green Peppers, Pineapple, Ham, Spinach, Garlic, Basil, Oregano, Chicken,
        Beef, Jalapenos, Anchovies, Artichokes
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-[20px]">
          from <b>{price}€</b>
        </span>
        <Button variant={'secondary'} className="text-base fonr-bold">
          <Plus size={20} className="mr-1" />
        </Button>
      </div>
    </div>
  );
};
