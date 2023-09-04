import React, { useState } from 'react';

import { PlusIcon } from '@ui/icons';

import { CounterButton, CounterContainer, CounterInput, StyledMinusIcon } from './styled';

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

export const Counter = ({ value, onChange }: Props) => {
  const [count, setCount] = useState(value);
  const onBlurHandler = () => {
    onChange?.(count);
  };

  const onChangePlus = () => {
    onChange?.(value + 1);
  };

  const onChangeMinus = () => {
    onChange?.(value - 1);
  };

  return (
    <CounterContainer>
      <CounterButton secondary onClick={onChangeMinus}>
        <StyledMinusIcon />
      </CounterButton>
      <CounterInput
        type="number"
        value={count}
        onBlur={onBlurHandler}
        onChange={(e) => setCount(Number(e.target.value) ?? 0)}
      />
      <CounterButton secondary onClick={onChangePlus}>
        <PlusIcon size="xs" />
      </CounterButton>
    </CounterContainer>
  );
};
