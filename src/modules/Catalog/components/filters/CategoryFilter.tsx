import React from 'react';
import styled from 'styled-components';

import { CheckBox } from '../../../../ui/components';
import { CategoryType } from '../../types';

type Props = {
  categories: CategoryType[];
  onChange: (id: number) => void;
  categoryId: number;
};

const StyledList = styled.div`
  ${({ theme }) => theme.typography.mini2};
`;

const StyledListItem = styled.div`
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

export const CategoryFilter = ({ categories, onChange, categoryId }: Props) => (
  <StyledList>
    {categories.map(({ id, name }) => (
      <StyledListItem key={id}>
        <CheckBox value={id === categoryId} onChange={() => onChange(id)}>
          {name}
        </CheckBox>
      </StyledListItem>
    ))}
  </StyledList>
);
