import { OrderType, SortType, ViewModeType } from '../types';

export const VIEW_MODE: Record<ViewModeType, ViewModeType> = {
  grid: 'grid',
  list: 'list',
};

export const SORT_TYPE: Record<SortType, SortType> = {
  name: 'name',
  price: 'price',
};

export const ORDER_TYPE: Record<OrderType, OrderType> = {
  ASC: 'ASC',
  DESC: 'DESC',
};
