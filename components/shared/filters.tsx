import React from 'react';
import { Title } from './title';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from '.';
import { Input } from '../ui';

type Props = {
  className?: string;
};

export const Filters = ({ className }: Props) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="font-bold mb-5" />
      <div className="flex flex-col gap-4 mb-5">
        <FilterCheckbox text="Customizable" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mb-5 border-y border-y-neutral-100 py-6">
        <p className="font-bold mb-3">Price-filter:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={25}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="9"
            min={9}
            max={25}
            defaultValue={9}
          />
        </div>
        <RangeSlider min={0} max={25} step={1} value={[0, 25]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="tmt-5"
        limit={6}
        defaultItems={[
          { text: 'Cheese Sauce', value: '1' },
          { text: 'Mozzarella', value: '2' },
          { text: 'Garlic', value: '3' },
          { text: 'Pickled Cucumber', value: '4' },
          { text: 'Red Onion', value: '5' },
          { text: 'Tomatos', value: '6' },
        ]}
        items={[
          { text: 'Cheese Sauce', value: '1' },
          { text: 'Mozzarella', value: '2' },
          { text: 'Garlic', value: '3' },
          { text: 'Pickled Cucumber', value: '4' },
          { text: 'Red Onion', value: '5' },
          { text: 'Tomatos', value: '6' },
          { text: 'Salami', value: '7' },
          { text: 'Peperoni', value: '8' },
          { text: 'Paprica', value: '9' },
          { text: 'Pickled Cucumber', value: '10' },
          { text: 'Mushrooms', value: '11' },
          { text: 'Parmesan', value: '12' },
        ]}
      />
    </div>
  );
};
