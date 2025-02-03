import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Product } from './product-group-list';

type Props = {
  className?: string;
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className=" h-[440px] w-[260px]">
      <Link href={`/product/${product.id}`} className="w-[260px]">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] w-[260px]">
          <img src={product.imageUrl} alt={'pizza image'} />
        </div>
      </Link>
      <Title text={product.name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400 h-[30px]">
        {product.ingredients.map((ing) => ing.name).join(', ')}
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-[20px]">
          <b>{product.items && product.items[0] && product.items[0].price}€</b>
        </span>
        <Button variant={'secondary'} className="text-base fonr-bold">
          <Plus size={20} className="mr-1" /> add
        </Button>
      </div>
    </div>
  );
};
