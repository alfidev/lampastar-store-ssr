import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input } from '../../../../ui/components';

import { FilterType, FilterValueBetweenType } from '../../types';

const InputLine = styled.div`
  display: flex;
`;

type Props = {
  filter: FilterType<FilterValueBetweenType, number | string>;
  setFilter: (value: Record<string, string | number>) => void;
  filtersValues: Record<string, string | number>;
};

const DelimiterContainer = styled.div`
  font-size: 16px;
  line-height: 40px;
  margin: 0 ${({ theme }) => theme.indents.xxs};
`;

export const BetweenFilter = ({ filter, setFilter, filtersValues }: Props) => {
  const { value } = filter;

  const [min, setMin] = useState(value.min);
  const [max, setMax] = useState(value.max);

  useEffect(() => {
    if (min !== value.min) {
      setFilter({ [`${filter.id}_min`]: min });
    } else if (filtersValues[`${filter.id}_min`]) {
      const { [`${filter.id}_min`]: deletedFilter, ...newFilters } = filtersValues;
      setFilter(newFilters);
    }
    if (max !== value.max) {
      setFilter({ [`${filter.id}_max`]: max });
    } else if (filtersValues[`${filter.id}_max`]) {
      const { [`${filter.id}_max`]: deletedFilter, ...newFilters } = filtersValues;
      setFilter(newFilters);
    }
  }, [filter.id, max, min, value.max, value.min]);

  const onChangeMax = (inputValue: string | number) => {
    const numberValue = Number(inputValue);
    if (numberValue > max || numberValue < min) setMax(value.max);
    else setMax(numberValue);
  };

  const onChangeMin = (inputValue: string | number) => {
    const numberValue = Number(inputValue);
    if (numberValue > max || numberValue < min) setMin(value.min);
    else setMin(numberValue);
  };

  return (
    <InputLine>
      <Input
        type="number"
        placeholder={value.min.toString()}
        value={min}
        min={min}
        max={max}
        onChange={(e) => onChangeMin(Number(e.target.value || value.min))}
      />
      <DelimiterContainer>&mdash;</DelimiterContainer>
      <Input
        type="number"
        placeholder={value.max.toString()}
        value={max}
        min={min}
        max={max}
        onChange={(e) => onChangeMax(Number(e.target.value || value.max))}
      />
    </InputLine>
  );
};