'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSet } from 'react-use';
type PriceRange = {
  minPrice?: number;
  maxPrice?: number;
};
export type QueryFilters = PriceRange & {
  sizes: string;
  crusts: string;
  selectedIngredients: string;
};
export type UseFilter = {
  selectedIngredients: Set<string>;
  setIngredients: (id: string) => void;
  prices: PriceRange;
  setPrices: (price: PriceRange) => void;
  sizes: Set<string>;
  setSizes: (key: string) => void;
  crusts: Set<string>;
  setCrusts: (key: string) => void;
  updatePrices: (name: string, event: React.ChangeEvent<EventTarget>) => void;
};
export const useFilters = (): UseFilter => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const [selectedIngredients, { toggle }] = useSet(
    new Set<string>(searchParams.get('selectedIngredients')?.split(','))
  );

  const [prices, setPrices] = useState<PriceRange>({
    minPrice: Number(searchParams.get('minPrice')),
    maxPrice: Number(searchParams.get('maxPrice')),
  });
  const [sizes, { toggle: setSizes }] = useSet(
    new Set<string>(
      searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  );
  const [crusts, { toggle: setCrusts }] = useSet(
    new Set<string>(
      searchParams.get('crusts') ? searchParams.get('crusts')?.split(',') : []
    )
  );

  const updatePrices = (
    name: string,
    event: React.ChangeEvent<EventTarget>
  ) => {
    setPrices({
      ...prices,
      [name]: Number((event.target as HTMLInputElement).value),
    });
  };
  return {
    selectedIngredients,
    prices,
    sizes,
    crusts,
    setIngredients: toggle,
    updatePrices,
    setSizes,
    setCrusts,
    setPrices,
  };
};
