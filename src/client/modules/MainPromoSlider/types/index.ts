import { promoSliderEnum } from '../constants';

export type BannerResponseType = {
  banner_id: string;
  banner_text: string;
  button_text: string;
  type: string;
  category_id: string;
  product_id: string;
  image: string;
  sort_order: string;
  status: string;
  date_added: string;
  date_modified: string;
};

export type BannersResponseType = {
  list: BannerResponseType[];
  total: number;
};

export type BannerType = {
  id: string;
  bannerText: string;
  buttonText: string;
  type: promoSliderEnum;
  categoryId: number;
  productId: number;
  image: string;
  sortOrder: number;
  status: number;
  dateAdded: string;
  dateModified: string;
  background: string;
};
