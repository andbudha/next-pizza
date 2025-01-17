'use client';
import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';

type Ingredients = {
  ingredients: Ingredient[];
};
export const useFilterIngredients = (): Ingredients => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
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

  return { ingredients };
};
