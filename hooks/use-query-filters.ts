import { useRouter } from 'next/navigation';
import qs from 'qs';
import { useEffect } from 'react';
import { UseFilter } from './use-filters';

export const useQueryFilters = (filters: UseFilter) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      sizes: Array.from(filters.sizes),
      crusts: Array.from(filters.crusts),
      selectedIngredients: Array.from(filters.selectedIngredients),
    };
    const query = qs.stringify(params, { arrayFormat: 'comma' });
    const url = `?${query}`;
    router.push(url, { scroll: false });
  }, [filters, router]);
};
