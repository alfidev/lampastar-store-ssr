import React from 'react';
import { CategoryMap } from '@modules/Catalog/types';
import styled from 'styled-components';

type Props = {
  categoriesMap: CategoryMap[];
  onClick: (id: string) => void;
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

const renderList = (categoriesMap: CategoryMap[], onClick: (id: string) => void) => {
  return (
    <StyledList>
      {categoriesMap.map(({ id, name, list }) => (
        <StyledListItem key={id}>
          <div onClick={() => onClick(id)}>{name}</div>
          {!!list.length && <StyledList>{renderList(list, onClick)}</StyledList>}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export const CategoryFilter = ({ categoriesMap, onClick }: Props) => {
  return renderList(categoriesMap, onClick);
};
