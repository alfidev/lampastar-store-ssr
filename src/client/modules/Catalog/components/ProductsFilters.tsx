import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { FILTERS_PORTAL_ID } from '@common/constants';
import { Accordion, Button } from '@ui/components';
import { useMediaQuery } from '@ui/hooks/useMediaQuery';
import { Close } from '@ui/icons';

import { CATEGORY_FILTER, PRICE_FILTER } from '../constants';
import { CategoryType, FilterType, FilterTypeType, FilterValueBetweenType } from '../types';
import { BetweenFilter, CategoryFilter, SelectFilter } from './filters';

const FiltersContainer = styled.div``;

const FiltersTitle = styled.div`
  ${({ theme }) => theme.typography.title2};
  background: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.s};
  margin-top: ${({ theme }) => theme.indents.xxxs};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled.div`
  margin-top: ${({ theme }) => theme.indents.xl};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.s};
`;

const FiltersBody = styled.div`
  margin-top: ${({ theme }) => theme.indents.xl};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.s};
`;

type Props = {
  categories: CategoryType[] | null;
  onClickCategory: (id: number) => void;
  showFilters: boolean;
  closeFilters: () => void;
  categoryId: number;
  filters: FilterType[];
  setFilters: (value: any) => void;
  priceLimits?: FilterValueBetweenType;
};

const MobileWrapper = styled.div``;

const getFilterComponent = (type: FilterTypeType) => {
  switch (type) {
    case 0:
      return BetweenFilter;
    case 1:
      return SelectFilter;
    default:
      return SelectFilter;
  }
};

export const ProductsFilters = ({
  categories,
  onClickCategory,
  showFilters,
  closeFilters,
  categoryId,
  filters,
  setFilters,
  priceLimits,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 'tablet' });
  const [filtersValues, setFiltersValues] = useState<Record<string, string | number>>({});

  const portal = typeof document !== 'undefined' ? document?.getElementById(FILTERS_PORTAL_ID) : null;

  useEffect(() => {
    if (!isMobile) setFilters(filtersValues);
  }, [isMobile, filtersValues, setFilters]);

  const priceFilter = useMemo(
    () => priceLimits && { id: PRICE_FILTER.id, title: PRICE_FILTER.title, type: 0, value: priceLimits },
    [priceLimits],
  );

  if (isMobile && !showFilters) return null;

  const setFilterValue = (value: any) => {
    setFiltersValues({ ...filtersValues, ...value });
  };

  const getFiltersBody = () => (
    <FiltersContainer>
      {categories && (
        <Accordion title={CATEGORY_FILTER.title} isOpen>
          <CategoryFilter categories={categories} onChange={onClickCategory} categoryId={categoryId} />
        </Accordion>
      )}
      {filters.map((filter) => {
        const { id, title, type } = filter;
        const FilterComponent = getFilterComponent(type);

        return (
          <Accordion key={id} title={title} isOpen>
            <FilterComponent
              filter={filter as FilterType<any>}
              setFilter={setFilterValue}
              filtersValues={filtersValues}
            />
          </Accordion>
        );
      })}
      {priceFilter && (
        <Accordion title={PRICE_FILTER.title} isOpen>
          <BetweenFilter filter={priceFilter} setFilter={setFilterValue} filtersValues={filtersValues} />
        </Accordion>
      )}
    </FiltersContainer>
  );

  const getFiltersMobileBody = () => (
    <MobileWrapper>
      <FiltersTitle>
        Фильтры
        <CloseButton onClick={closeFilters}>
          <Close />
        </CloseButton>
      </FiltersTitle>
      <FiltersBody>{getFiltersBody()}</FiltersBody>
      <SubmitButton>
        <Button.Contained isFluid secondary onClick={closeFilters}>
          Применить
        </Button.Contained>
      </SubmitButton>
    </MobileWrapper>
  );

  if (isMobile && showFilters && portal) return createPortal(getFiltersMobileBody(), portal);

  return getFiltersBody();
};
