import React from 'react';
import styled from 'styled-components';
import { Card } from '@ui/components';
import { OrderType, SortType, ViewModeType } from '../types';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { locale } from '../locale';
import { GridIcon, ListIcon, SortAscIcon, SortDescIcon } from '@ui/icons';

const { sortOrder } = locale;

type Props = {
  viewMode: ViewModeType;
  sortType: SortType;
  orderType: OrderType;
  setViewMode: (mode: ViewModeType) => void;
  setSortType: (mode: SortType) => void;
  setOrderType: (mode: OrderType) => void;
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

export const ControlPanel = ({ viewMode, sortType, orderType, setViewMode, setSortType, setOrderType }: Props) => {
  const onClickSortHandler = (sortKey: SortType) => {
    if (sortKey === sortType) {
      if (orderType === ORDER_TYPE.ASC) setOrderType(ORDER_TYPE.DESC);
      else setOrderType(ORDER_TYPE.ASC);
    } else {
      setSortType(sortKey);
      setOrderType(ORDER_TYPE.ASC);
    }
  };

  return (
    <ControlContainer>
      <ButtonContainer>
        Сортировать:
        {Object.keys(SORT_TYPE).map((key) => (
          <Item key={key} onClick={() => onClickSortHandler(key as SortType)} active={key === sortType}>
            {sortOrder[key]}
            {key === sortType && (
              <>
                {orderType === ORDER_TYPE.ASC ? (
                  <SortAscIcon size="xxl" ml="xs" />
                ) : (
                  <SortDescIcon size="xxl" ml="xs" />
                )}
              </>
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
