'use client';
import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';

type UseIngredients = {
  ingredients: Ingredient[];
};
export const useIngredients = (): UseIngredients => {
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
