import React, { useState } from 'react';
import styled from 'styled-components';

import { DownSheet } from '@common/components/DownSheet';
import { Card, DownSheet as DownSheetComponent } from '@ui/components';
import { useMediaQuery } from '@ui/hooks/useMediaQuery';
import { Filters, GridIcon, ListIcon, SortOrderAsc, SortOrderDesc } from '@ui/icons';

import { ORDER_TYPE, SORT_MOBILE_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { locale } from '../locale';
import { OrderType, SortMobileType, SortType, ViewModeType } from '../types';

const { sortOrder } = locale;

type Props = {
  viewMode: ViewModeType;
  sortType: SortType;
  orderType: OrderType;
  setViewMode: (mode: ViewModeType) => void;
  setSortType: (mode: SortType) => void;
  setOrderType: (mode: OrderType) => void;
  openFilters?: () => void;
};

const ControlContainer = styled.div`
  display: flex;
  ${({ theme }) => theme.typography.mini2};
  justify-content: space-between;
`;

const ButtonContainer = styled(Card).attrs({ mini: true })`
  display: flex;
`;

const Item = styled.div<{ active: boolean }>`
  display: flex;
  margin-left: ${({ theme }) => theme.indents.m};
  cursor: pointer;
  color: ${({ theme, active }) => active && theme.color.text.contrastLine};

  :hover {
    color: ${({ theme }) => theme.color.text.contrastLine};
  }
`;

const ItemIcon = styled(Item)`
  :first-child {
    margin-left: 0;
  }
`;

const SortOrderAscIconLeft = styled(SortOrderAsc)`
  margin-right: ${({ theme }) => theme.indents.xs};
  width: ${({ theme }) => theme.sizes.xxl};
  height: ${({ theme }) => theme.sizes.xxl};
`;

const SortOrderAscIconRight = styled(SortOrderAsc)`
  margin-left: ${({ theme }) => theme.indents.xs};
  width: ${({ theme }) => theme.sizes.xxl};
  height: ${({ theme }) => theme.sizes.xxl};
`;

const SortOrderDescIconLeft = styled(SortOrderDesc)`
  margin-right: ${({ theme }) => theme.indents.xs};
  width: ${({ theme }) => theme.sizes.xxl};
  height: ${({ theme }) => theme.sizes.xxl};
`;

const SortOrderDescIconRight = styled(SortOrderDesc)`
  margin-left: ${({ theme }) => theme.indents.xs};
  width: ${({ theme }) => theme.sizes.xxl};
  height: ${({ theme }) => theme.sizes.xxl};
`;

const FilterIcon = styled(Filters)`
  margin-right: ${({ theme }) => theme.indents.xs};
  width: ${({ theme }) => theme.sizes.xxl};
  height: ${({ theme }) => theme.sizes.xxl};
`;

export const ControlPanel = ({
  viewMode,
  sortType,
  orderType,
  setViewMode,
  setSortType,
  setOrderType,
  openFilters,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 'tablet' });

  const [isShowedSort, setIsShowedSort] = useState(false);

  const onClickSortHandler = (sortKey: SortType) => {
    if (sortKey === sortType) {
      if (orderType === ORDER_TYPE.ASC) setOrderType(ORDER_TYPE.DESC);
      else setOrderType(ORDER_TYPE.ASC);
    } else {
      setSortType(sortKey);
      setOrderType(ORDER_TYPE.ASC);
    }
  };

  const onClickSortMobileHandler = (sortKey: SortMobileType) => {
    setSortType(SORT_MOBILE_TYPE[sortKey].key);
    setOrderType(SORT_MOBILE_TYPE[sortKey].type);
    setIsShowedSort(false);
  };

  if (isMobile)
    return (
      <>
        <ControlContainer>
          <ButtonContainer onClick={() => setIsShowedSort(true)}>
            {orderType === ORDER_TYPE.ASC ? <SortOrderAscIconLeft /> : <SortOrderDescIconLeft />}
            {sortOrder[sortType]}
          </ButtonContainer>
          {openFilters && (
            <ButtonContainer onClick={openFilters}>
              <FilterIcon />
              Фильтры
            </ButtonContainer>
          )}
        </ControlContainer>
        <DownSheet isOpen={isShowedSort} onClose={() => setIsShowedSort(false)} title="Сортировать по">
          {Object.keys(SORT_MOBILE_TYPE).map((key) => (
            <DownSheetComponent.DownSheetItem key={key} onClick={() => onClickSortMobileHandler(key as SortMobileType)}>
              {
                sortOrder[
                  `${SORT_MOBILE_TYPE[key as SortMobileType].key}${SORT_MOBILE_TYPE[key as SortMobileType].type}`
                ]
              }
            </DownSheetComponent.DownSheetItem>
          ))}
        </DownSheet>
      </>
    );

  return (
    <ControlContainer>
      <ButtonContainer>
        Сортировать:
        {Object.keys(SORT_TYPE).map((key) => (
          <Item key={key} onClick={() => onClickSortHandler(key as SortType)} active={key === sortType}>
            {sortOrder[key]}
            {key === sortType && (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>{orderType === ORDER_TYPE.ASC ? <SortOrderAscIconRight /> : <SortOrderDescIconRight />}</>
            )}
          </Item>
        ))}
      </ButtonContainer>

      <ButtonContainer>
        <ItemIcon active={viewMode === VIEW_MODE.grid} onClick={() => setViewMode(VIEW_MODE.grid)}>
          <GridIcon size="xxl" />
        </ItemIcon>
        <ItemIcon active={viewMode === VIEW_MODE.list} onClick={() => setViewMode(VIEW_MODE.list)}>
          <ListIcon size="xxl" />
        </ItemIcon>
      </ButtonContainer>
    </ControlContainer>
  );
};
