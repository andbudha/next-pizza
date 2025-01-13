'use client';
import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

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
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log('INTERSECTION:::', title, categoryId);
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-bold" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
