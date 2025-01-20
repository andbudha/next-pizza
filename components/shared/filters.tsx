'use client';
import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

type Props = {
  className?: string;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, selectedIds, onAddId } = useFilterIngredients();
  console.log(selectedIds);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      {/* <div className="flex flex-col gap-4">
        <FilterCheckbox
          text="Create your pizza"
          value="1"
          onCheckBoxClick={onAddId}
        />
        <FilterCheckbox text="New" value="2" onCheckBoxClick={onAddId} />
      </div> */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={15}
            defaultValue={0}
          />
          <Input type="number" min={8} max={15} placeholder="15" />
        </div>
        <RangeSlider min={0} max={15} step={1} />
      </div>
      <CheckboxFilterGroup
        className="mt-5"
        title={'Ingredients'}
        items={ingredients}
        limit={6}
        onCheckBoxClick={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
