'use client';
import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Divide, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';

type Props = {
  className?: string;
};

export const SearchInput = ({ className }: Props) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    500,
    [searchQuery]
  );

  const catchSearchQueryValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  const onProductClickHandler = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-[150]" />
      )}

      <div
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11 z-[150]',
          className
        )}
        ref={ref}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={catchSearchQueryValueHandler}
        />
        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-16 shadow-md transition-all duration-200 invisible opacity-0 z-[150]',
            focused && 'visible opacity-100 top-12'
          )}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="flex items-center  hover:bg-primary/10"
                onClick={onProductClickHandler}
              >
                <img
                  src={product.imageUrl}
                  alt="Pizza Image"
                  className="h-8 w-8 ml-2 rounded-full"
                />
                <div className="px-3 py-2">{product.name}</div>
              </Link>
            ))
          ) : (
            <div className="text-center px-2 py-1 text-primary font-bold">
              No Match Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};
