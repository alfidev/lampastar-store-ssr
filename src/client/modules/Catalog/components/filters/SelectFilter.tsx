import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CheckBox } from '@ui/components';

import { FilterType, FilterValueSelectType } from '../../types';

type Props = {
  filter: FilterType<FilterValueSelectType[]>;
  setFilter: (value: any) => void;
  filtersValues: any;
};

const StyledList = styled.div`
  ${({ theme }) => theme.typography.mini2};
`;

const StyledListItem = styled.div`
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

export const SelectFilter = ({ filter, setFilter, filtersValues }: Props) => {
  const [changes, setChanges] = useState<Record<number, boolean>>({});
  const { value } = filter;

  useEffect(() => {
    const trueValues = Object.keys(changes)
      .filter((key) => changes[Number(key)])
      .map((id) => Number(id));

    if (trueValues.length) {
      setFilter({ [filter.id]: trueValues });
    } else if (filtersValues[filter.id]) {
      const { [filter.id]: deletedFilter, ...newFilters } = filtersValues;
      setFilter(newFilters);
    }
  }, [changes, filter.id]);

  const handleChange = (id: number, checked: boolean) => {
    setChanges({ ...changes, [id]: checked });
  };

  return (
    <StyledList>
      {value.map(({ id, title }) => (
        <StyledListItem key={id}>
          <CheckBox value={changes[id]} onChange={(e) => handleChange(id, e.target.checked)}>
            {title}
          </CheckBox>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
