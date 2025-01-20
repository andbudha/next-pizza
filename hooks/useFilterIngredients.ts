'use client';
import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';

type Ingredients = {
  ingredients: Ingredient[];
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
};
export const useFilterIngredients = (): Ingredients => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getIngredients();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, selectedIds, onAddId: toggle };
};
