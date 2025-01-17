import { Ingredient } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getIngredients = async () => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.SEARCH_INGTREDIENTS))
    .data;
};
