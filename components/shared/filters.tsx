'use client';
import React, { useEffect } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

type Props = {
  className?: string;
};

export const Filters = ({ className }: Props) => {
  const filters = useFilters();
  useQueryFilters(filters);
  const { ingredients } = useIngredients();
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices({
      minPrice: prices[0],
      maxPrice: prices[1],
    });
  };
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <CheckboxFilterGroup
        className="mt-5"
        title={'Pizza Size'}
        name="sizes"
        onCheckBoxClick={filters.setSizes}
        selected={filters.sizes}
        items={[
          { value: '28', text: '28cm' },
          { value: '33', text: '33cm' },
        ]}
      />
      <CheckboxFilterGroup
        className="mt-5"
        title={'Pizza Crust'}
        name="crusts"
        onCheckBoxClick={filters.setCrusts}
        selected={filters.crusts}
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
            placeholder="0"
            min={0}
            max={15}
            value={filters.prices.minPrice}
            onChange={(event) => filters.updatePrices('minPrice', event)}
          />
          <Input
            type="number"
            min={0}
            max={15}
            placeholder="15"
            value={filters.prices.maxPrice}
            onChange={(event) => filters.updatePrices('maxPrice', event)}
          />
        </div>
        <RangeSlider
          min={0}
          max={15}
          step={1}
          value={[filters.prices.minPrice || 0, filters.prices.maxPrice || 15]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFilterGroup
        className="mt-5"
        title={'Ingredients'}
        items={items}
        limit={6}
        name="ingredients"
        onCheckBoxClick={filters.setIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
