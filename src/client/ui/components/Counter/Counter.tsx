import React, { ChangeEvent } from 'react';

import { CounterButton, CounterContainer, CounterInput, StyledMinusIcon } from './styled';
import { PlusIcon } from '@ui/icons';

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

export const Counter = ({ value, onChange }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value) ?? 0);
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
      <CounterInput type="number" value={value} onChange={onChangeHandler} />
      <CounterButton secondary onClick={onChangePlus}>
        <PlusIcon size="xs" />
      </CounterButton>
    </CounterContainer>
  );
};
