import { BreadcrumbType } from '@common/types/breadcrumbs';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image?: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyword: string;
  tag: string;
  model: string;
  sku: string;
  upc: string;
  ean: string;
  jan: string;
  isbn: string;
  mpn: string;
  location: string;
  stockStatus?: string;
  manufacturerId?: string;
  manufacturer?: string;
  discount?: number;
  special?: number;
  reward?: string;
  points: string;
  taxClassId: string;
  dateAvailable: string;
  weight: string;
  weightClassId: string;
  length: string;
  width: string;
  height: string;
  lengthClassId: string;
  subtract: string;
  rating: number;
  reviews: number;
  minimum: string;
  sortOrder: string;
  status: string;
  dateAdded: string;
  dateModified: string;
  viewed: string;
  notAvailable: boolean;
  forOrder: boolean;
  basketQuantity?: number;
  breadcrumbs: BreadcrumbType[];
};

export type ProductsTypeResponse = {
  list: ProductType[];
  total: number;
  breadcrumbs: BreadcrumbType[];
};
