'use client';
import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterChecboxProps;
type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
};

export const CheckboxFilterGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder,
  onChange,
  defaultValue,
  className,
}: Props) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const ingredientList = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items!.slice(0, limit);

  const catchingSearchValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={catchingSearchValueHandler}
            value={searchValue}
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 overflow-auto pr-2 scrollbar">
        {ingredientList!.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
          />
        ))}
      </div>
      {items!.length > limit && (
        <div
          className={showAll ? 'border-t border-t-neutral-100 mt-4' : 'mt-4'}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary my-3"
          >
            {showAll ? 'Show less' : 'Show all'}
          </button>
        </div>
      )}
    </div>
  );
};
