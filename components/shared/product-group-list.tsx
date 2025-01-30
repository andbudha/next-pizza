'use client';
import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

type Item = {
  id: number;
  price: number | null;
  size: number | null;
  pizzaType: number | null;
  productId: number | null;
};
type Ingredient = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId: number;
  ingredients: Ingredient[];
  items: Item[];
};
type Props = {
  title: string;
  products: Product[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export const ProductGroupList = ({
  title,
  products,
  categoryId,
  className,
  listClassName,
}: Props) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-bold" />
      <div
        className={cn(
          'grid xl:grid-cols-3 gap-[50px] lg:grid-cols-2 md:grid-cols-1',
          listClassName
        )}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
