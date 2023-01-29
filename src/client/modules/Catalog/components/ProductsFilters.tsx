import React from 'react';
import styled from 'styled-components';

import { Accordion } from '@ui/components';

import { CATEGORY_FILTER, PRICE_FILTER } from '../constants';
import { CategoryMap, FilterType } from '../types';
import { CategoryFilter } from './filters';

const FiltersContainer = styled.div``;

type Props = {
  categoriesMap: CategoryMap[];
  onClickCategory: (id: number) => void;
};

const filters: FilterType[] = [];

export const ProductsFilters = ({ categoriesMap, onClickCategory }: Props) => (
  <FiltersContainer>
    <Accordion title={CATEGORY_FILTER.title} isOpen>
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
