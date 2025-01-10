import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  ingredients: string;
};
type Props = {
  title: string;
  items: Product[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export const ProductGroupList = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}: Props) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="mb-5 font-bold" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
