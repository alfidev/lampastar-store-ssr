import { Button } from '../Button';
import styled from 'styled-components';
import { Input } from '../Input';
import { MinusIcon } from '../../icons';

export const CounterContainer = styled.div`
  background: ${({ theme }) => theme.color.background.main};
  border-radius: ${({ theme }) => theme.radius.xs};
  display: flex;
`;

export const CounterButton = styled(Button.Outlined)`
  padding-left: ${({ theme }) => theme.indents.m};
  padding-right: ${({ theme }) => theme.indents.m};
  color: ${({ theme }) => theme.color.buttons.secondary};

  :hover {
    color: ${({ theme }) => theme.color.buttons.secondaryHover};
  }

  :active {
    color: ${({ theme }) => theme.color.buttons.secondaryActive};
  }
`;

export const CounterInput = styled(Input)`
  background: transparent;
  border: none;
  width: 100%;
  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type='number'] {
    -moz-appearance: textfield;
  }
`;

export const StyledMinusIcon = styled(MinusIcon)`
  :before {
    font-size: 2px;
  }
`;