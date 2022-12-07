import { API_BANNERS_URL } from '../constants';
import { BannersResponseType } from '../types';
import { useQuery } from 'react-query';
import { getQueryRequest } from '@common/utils';
import { useMemo } from 'react';
import { mapBanners } from '../utils';

export const usePromoSliderData = () => {
  const { isLoading, data, isError } = useQuery([API_BANNERS_URL], getQueryRequest<BannersResponseType>());

  const bannerList = useMemo(() => (data?.list ? mapBanners(data.list) : []), [data]);

  return { slides: bannerList, isLoading, isError };
};
