'use client';
import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';
import { Ingredient } from '@prisma/client';

type Item = FilterChecboxProps;

type Props = {
  name?: string;
  title: string;
  items: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  onCheckBoxClick: (value: string) => void;
  defaultValue?: string[];
  className?: string;
  selected: Set<string>;
};

export const CheckboxFilterGroup = ({
  name,
  title,
  items,
  limit,
  searchInputPlaceholder,
  onChange,
  onCheckBoxClick,
  className,
  selected,
}: Props) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const skeletonArray = new Array(limit!).fill(0);
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
    <>
      {ingredientList.length === 0 ? (
        <div className={className}>
          <p className="font-bold mb-3">{title}</p>
          {skeletonArray.map((_, index) => (
            <Skeleton className="rounded-[8px] w-full h-6 mb-4" />
          ))}
          <Skeleton className="rounded-[8px] w-[80px] h-6 mt-8" />
        </div>
      ) : (
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
                value={String(item.value)}
                onCheckedChange={(ids) => console.log(ids)}
                checked={selected.has(String(item.value))}
                onCheckBoxClick={onCheckBoxClick}
                name={name}
              />
            ))}
          </div>
          {items!.length > limit! && (
            <div
              className={
                showAll ? 'border-t border-t-neutral-100 mt-4' : 'mt-4'
              }
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
      )}
    </>
  );
};
