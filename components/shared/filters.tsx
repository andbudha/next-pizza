import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';

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
    </div>
  );
};
