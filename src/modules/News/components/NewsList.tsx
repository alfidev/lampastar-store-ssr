import React from 'react';
import { ImageSizeEnum, NewsItemType } from '../types';
import { NewsItem } from './NewsItem';

type Props = {
  list: NewsItemType[];
  onClick: (id: number) => void;
};
export const NewsList = ({ list, onClick }: Props) => {
  return (
    <>
      {list.map((item) => (
        <NewsItem key={item.id} item={item} onClick={onClick} imageType={ImageSizeEnum.p} />
      ))}
    </>
  );
};
