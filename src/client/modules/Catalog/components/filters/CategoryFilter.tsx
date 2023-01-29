import React from 'react';
import styled from 'styled-components';

import { CategoryMap } from '../../types';

type Props = {
  categoriesMap: CategoryMap[];
  onClick: (id: number) => void;
};

const StyledList = styled.ul`
  ${({ theme }) => theme.typography.mini2};
  list-style-type: circle;
  margin: 0;
  padding-left: 13px;
`;

const StyledListItem = styled.li`
  cursor: pointer;
`;

const renderList = (categoriesMap: CategoryMap[], onClick: (id: number) => void) => (
  <StyledList>
    {categoriesMap.map(({ id, name, list }) => (
      <StyledListItem key={id}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={() => onClick(id)}>{name}</div>
        {!!list.length && <StyledList>{renderList(list, onClick)}</StyledList>}
      </StyledListItem>
    ))}
  </StyledList>
);

export const CategoryFilter = ({ categoriesMap, onClick }: Props) => renderList(categoriesMap, onClick);
