import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Category } from '@prisma/client';

type Props = {
  categories: Category[];
};

export const TopBar = (props: Props) => {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-50">
      <Container className="flex items-center justify-between">
        <Categories categories={props.categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
