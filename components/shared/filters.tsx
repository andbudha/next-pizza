'use client';
import React, { useState } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

type Props = {
  className?: string;
};

type PriceRange = {
  minPrice: number;
  maxPrice: number;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, selectedIngredients, onAddId } = useFilterIngredients();
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const [prices, setPrice] = useState<PriceRange>({
    minPrice: 3,
    maxPrice: 15,
  });
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [crusts, { toggle: toggleCrusts }] = useSet(new Set<string>([]));

  const updatePrices = (
    name: string,
    event: React.ChangeEvent<EventTarget>
  ) => {
    setPrice({
      ...prices,
      [name]: Number((event.target as HTMLInputElement).value),
    });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      sizes: Array.from(sizes),
      crusts: Array.from(crusts),
      selectedIngredients: Array.from(selectedIngredients),
    };
  }, [prices, sizes, crusts, selectedIngredients]);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <CheckboxFilterGroup
        className="mt-5"
        title={'Pizza Size'}
        name="sizes"
        onCheckBoxClick={toggleSizes}
        selected={sizes}
        items={[
          { value: '28', text: '28cm' },
          { value: '33', text: '33cm' },
        ]}
      />
      <CheckboxFilterGroup
        className="mt-5"
        title={'Pizza Crust'}
        name="crusts"
        onCheckBoxClick={toggleCrusts}
        selected={crusts}
        items={[
          { value: '1', text: 'Thin Crust' },
          { value: '2', text: 'Thick Crust' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="3"
            min={3}
            max={15}
            value={prices.minPrice}
            onChange={(event) => updatePrices('minPrice', event)}
          />
          <Input
            type="number"
            min={3}
            max={15}
            placeholder="15"
            value={prices.maxPrice}
            onChange={(event) => updatePrices('maxPrice', event)}
          />
        </div>
        <RangeSlider
          min={3}
          max={15}
          step={1}
          value={[prices.minPrice, prices.maxPrice]}
          onValueChange={([minPrice, maxPrice]) =>
            setPrice({ minPrice, maxPrice })
          }
        />
      </div>
      <CheckboxFilterGroup
        className="mt-5"
        title={'Ingredients'}
        items={items}
        limit={6}
        name="ingredients"
        onCheckBoxClick={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
