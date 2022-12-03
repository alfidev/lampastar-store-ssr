import { promoSliderEnum } from '../constants';
import { SlideType } from '../types';

const SLIDES_LIST: SlideType[] = [{ type: promoSliderEnum.CATEGORY, elementId: '3', background: '#FFB811' }];
export const usePromoSliderData = () => {
  return { slides: SLIDES_LIST, isLoading: false, isError: false };
};
