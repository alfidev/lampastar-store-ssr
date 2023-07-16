import { useField } from 'formik';
import React, { ReactNode, RefObject, useState } from 'react';
import styled from 'styled-components';

import { formatPhoneNumber } from '@common/utils';
import { CheckBox, Input, Textarea } from '@ui/components';

type Props<U = HTMLInputElement> = {
  label?: string;
  name: string;
  validation?: boolean;
  ref?: ((instance: U | null) => void) | RefObject<U> | null;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<U>, U>;

type TextAreaProps = Props<HTMLTextAreaElement>;

const Wrapper = styled.div<{ validation?: boolean }>`
  width: 100%;
  margin-bottom: ${({ theme, validation }) => (validation ? theme.indents.none : theme.indents.m)};
`;

const TextAreaWrapper = styled(Wrapper)`
  height: 100%;
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

const ValidationMark = styled.span`
  color: ${({ theme }) => theme.color.status.error};
`;

export const Field = ({ validation, label, ...props }: Props) => {
  const [field, meta] = useField(props);

  const showError = meta.touched && !!meta.error;

  return (
    <Wrapper validation={validation}>
      {label && (
        <Label>
          {validation && <ValidationMark>* </ValidationMark>}
          {label}
        </Label>
      )}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input isError={validation && showError} {...field} {...props} />
      {validation && <Error>{showError && meta.error}</Error>}
    </Wrapper>
  );
};

export const FieldTextarea = ({ validation, label, ...props }: TextAreaProps) => {
  const [field, meta] = useField(props);

  const showError = meta.touched && !!meta.error;

  return (
    <TextAreaWrapper validation={validation}>
      {label && (
        <Label>
          {validation && <ValidationMark>* </ValidationMark>}
          {label}
        </Label>
      )}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Textarea isError={validation && showError} {...field} {...props} />
      {validation && <Error>{showError && meta.error}</Error>}
    </TextAreaWrapper>
  );
};

export const FieldMobile = ({ validation, label, ...props }: Props) => {
  const [{ onChange, value, ...field }, meta, { setValue }] = useField(props);
  const [isFocused, setIsFocused] = useState(false);

  const showError = meta.touched && !!meta.error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value?.slice(2)?.match(/\d+/g)?.join('')?.slice(0, 10) ?? '';

    setValue(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <Wrapper validation={validation}>
      {label && (
        <Label>
          {label && validation && <ValidationMark>* </ValidationMark>}
          {label}
        </Label>
      )}

      <Input
        onChange={handleChange}
        onFocus={handleFocus}
        isError={validation && showError}
        value={meta.touched || isFocused || value ? formatPhoneNumber(value) : ''}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...field}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
      />
      {validation && <Error>{showError && meta.error}</Error>}
    </Wrapper>
  );
};

export const FieldCheckbox = ({ validation, text, label, ...props }: Props & { text?: ReactNode }) => {
  const [field, meta] = useField(props);

  const showError = meta.touched && !!meta.error;

  return (
    <Wrapper validation={validation}>
      {label && (
        <Label>
          {label && validation && <ValidationMark>* </ValidationMark>}
          {label}
        </Label>
      )}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <CheckBox {...field} {...props}>
        {text}
      </CheckBox>
      {validation && <Error>{showError && meta.error}</Error>}
    </Wrapper>
  );
};
