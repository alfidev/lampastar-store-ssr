import React from 'react';
import { Accordion } from '@ui/components';
import styled from 'styled-components';
import { CategoryMap, FilterType } from '../types';

import { CATEGORY_FILTER, PRICE_FILTER } from '../constants';
import { CategoryFilter } from './filters';

const FiltersContainer = styled.div``;

type Props = {
  categoriesMap: CategoryMap[];
  onClickCategory: (id: string) => void;
};

const filters: FilterType[] = [];

export const ProductsFilters = ({ categoriesMap, onClickCategory }: Props) => {
  return (
    <FiltersContainer>
      <Accordion title={CATEGORY_FILTER.title} isOpen={true}>
        <CategoryFilter categoriesMap={categoriesMap} onClick={onClickCategory} />
      </Accordion>
      {filters.map(({ id, title }) => (
        <Accordion key={id} title={title}>
          1
        </Accordion>
      ))}
      {false && <Accordion title={PRICE_FILTER.title}>1</Accordion>}
    </FiltersContainer>
  );
};
