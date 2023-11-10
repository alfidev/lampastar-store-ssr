import React from 'react';
import { BreadcrumbsWrapper, BreadcrumbsItem } from './styled';

export type BreadcrumbType = { path: string; label: string };

export type BreadcrumbsType = BreadcrumbType[];

type Props = {
  items: BreadcrumbsType;
};

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <BreadcrumbsWrapper>
      {items.length > 0 && <BreadcrumbsItem to="/">{'Главная - '}</BreadcrumbsItem>}
      {items.map(({ path, label }, index) => (
        <BreadcrumbsItem key={path} to={path}>{`${label}${index < items.length - 1 ? ' - ' : ''}`}</BreadcrumbsItem>
      ))}
    </BreadcrumbsWrapper>
  );
};
