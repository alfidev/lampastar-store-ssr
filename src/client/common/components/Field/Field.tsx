import { useField } from 'formik';
import React, { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

import { CheckBox, Input } from '@ui/components';

type Props = {
  label?: string;
  name: string;
  validation?: boolean;
  ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Wrapper = styled.div<{ validation?: boolean }>`
  margin-bottom: ${({ theme, validation }) => (validation ? theme.indents.none : theme.indents.m)};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.indents.xxs};
  ${({ theme }) => theme.typography.body2}
`;

const Error = styled.div`
  height: 16px;
  ${({ theme }) => theme.typography.mini1};
  color: ${({ theme }) => theme.color.status.error};
  line-height: 16px;
`;

const reformatNumber = (val: string) => {
  const match = val.match(/(\+7)|(\d)/g);

  let res = [...(match || [])];

  let result;

  if (res[0] === '+7') {
    result = '+7';
    res.shift();
  } else {
    result = '+7';
  }

  if (res.length >= 1) {
    result = result + ' (' + res.slice(0, 3).join('');
    res = res.slice(3);
  }

  if (res.length >= 1) {
    result = result + ') ' + res.slice(0, 3).join('');
    res = res.slice(3);
  }

  if (res.length >= 1) {
    result = result + '-' + res.slice(0, 2).join('');
    res = res.slice(2);
  }

  if (res.length >= 1) {
    result = result + '-' + res.slice(0, 2).join('');
  }

  return result;
};

const ValidationMark = styled.span`
  color: ${({ theme }) => theme.color.status.error};
`;

export const Field = ({ validation, label, ...props }: Props) => {
  const [field, meta] = useField(props);

  const showError = meta.touched && !!meta.error;

  return (
    <Wrapper validation={validation}>
      <Label>
        {validation && <ValidationMark>* </ValidationMark>}
        {label}
      </Label>
      <Input isError={showError} {...field} {...props} />
      {validation && <Error>{showError && meta.error}</Error>}
    </Wrapper>
  );
};

export const FieldMobile = ({ validation, label, ...props }: Props) => {
  const [{ onChange, ...field }, meta] = useField(props);

  const showError = meta.touched && !!meta.error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = reformatNumber(e.target.value);

    onChange(e);
  };

  return (
    <Wrapper validation={validation}>
      <Label>
        {validation && <ValidationMark>* </ValidationMark>}
        {label}
      </Label>
      <Input onChange={handleChange} isError={showError} {...field} {...props} />
      {validation && <Error>{showError && meta.error}</Error>}
    </Wrapper>
  );
};

export const FieldCheckbox = ({ validation, text, label, ...props }: Props & { text?: ReactNode }) => {
  const [field, meta] = useField(props);

  const showError = meta.touched && !!meta.error;

  return (
    <Wrapper validation={validation}>
      <Label>
        {validation && <ValidationMark>* </ValidationMark>}
        {label}
      </Label>
      <CheckBox {...field} {...props}>
        {text}
      </CheckBox>
      {validation && <Error>{showError && meta.error}</Error>}
    </Wrapper>
  );
};
