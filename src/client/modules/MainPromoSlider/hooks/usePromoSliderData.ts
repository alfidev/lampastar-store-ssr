import { SlideType } from '../types';
import { promoSliderEnum } from '../constants';

const SLIDES_LIST: SlideType[] = [{ type: promoSliderEnum.CATEGORY, elementId: '3', background: '#FFB811' }];
export const usePromoSliderData = () => {
  return { slides: SLIDES_LIST, isLoading: false, isError: false };
};
