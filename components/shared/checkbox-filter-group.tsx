'use client';
import React from 'react';
import { FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';
import { Ingredient } from '@prisma/client';

type Props = {
  title: string;
  items: Ingredient[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
};

export const CheckboxFilterGroup = ({
  title,
  items,
  limit,
  searchInputPlaceholder,
  onChange,
  className,
}: Props) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const skeletonArray = new Array(limit!).fill(0);
  const ingredientList = showAll
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items!.slice(0, limit);

  const catchingSearchValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };
  console.log(ingredientList);

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
                text={item.name}
                value={String(item.id)}
                onCheckedChange={(ids) => console.log(ids)}
                checked={false}
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
