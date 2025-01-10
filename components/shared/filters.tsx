import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';

type Props = {
  className?: string;
};

export const Filters = ({ className }: Props) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Create your pizza" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
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
        defaultItems={[
          { text: 'Cheese', value: '1' },
          { text: 'Pepperoni', value: '2' },
          { text: 'Ham', value: '3' },
          { text: 'Mushrooms', value: '4' },
          { text: 'Olives', value: '5' },
          { text: 'Bacon', value: '6' },
        ]}
        items={[
          { text: 'Cheese', value: '1' },
          { text: 'Pepperoni', value: '2' },
          { text: 'Ham', value: '3' },
          { text: 'Mushrooms', value: '4' },
          { text: 'Olives', value: '5' },
          { text: 'Bacon', value: '6' },
          { text: 'Onions', value: '7' },
          { text: 'Bell peppers', value: '8' },
          { text: 'Tomatoes', value: '9' },
          { text: 'Spinach', value: '10' },
          { text: 'Egg', value: '11' },
          { text: 'Anchovies', value: '12' },
          { text: 'Artichokes', value: '13' },
          { text: 'Sausage', value: '14' },
          { text: 'Jalapenos', value: '15' },
        ]}
        limit={6}
      />
    </div>
  );
};
