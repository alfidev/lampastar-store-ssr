import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Typography } from "../Typography";

const inputBorderStyles = css`
  outline: none;
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid ${({ theme }) => theme.color.border.input};
`;

const inputStyles = css`
  ${inputBorderStyles};
  flex-grow: 1;
  padding: 0 ${({ theme }) => theme.indents.xs};
  height: 40px;
  width: 100%;
  ${({ theme }) => theme.typography.body4}

  ::placeholder {
    ${({ theme }) => theme.typography.body4}
  }

  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  ${inputStyles};
  resize: none;
  padding-top: ${({ theme }) => theme.indents.xs};
  padding-bottom: ${({ theme }) => theme.indents.xs};
`;

const CustomCheckBox = styled.label<{ checked: boolean; withText: boolean }>`
  display: flex;
  margin: ${({ theme }) => theme.indents.none};
  cursor: pointer;
  position: relative;

  ::before {
    content: "";
    display: inline-block;
    min-width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme.radius.xxs};
    border: 1px solid ${({ theme }) => theme.color.border.input};
    background: ${({ theme }) => theme.color.background.primary};
    margin-right: ${({ theme, withText }) =>
      withText ? theme.indents.xs : theme.indents.none};
  }

  ::after {
    display: ${({ checked }) => (checked ? "block" : "none")};
    position: absolute;
    content: "";
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSA3LjVMNy4wOTU5NCAxMy4wOTU5TDE4LjExMjIgMi4wNzk3MSIgc3Ryb2tlPSIjRkY3NzNEIiBzdHJva2Utd2lkdGg9IjIuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
    min-width: 20px;
    height: 16px;
    left: 3px;
    top: -1px;
  }
`;

export const CheckBox = styled(
  ({
    value,
    onChange,
    children,
    className,
  }: {
    value: boolean;
    onChange: (value: boolean) => void;
    children: ReactNode;
    className?: string;
  }) => {
    const withText = Boolean(children);

    return (
      <CustomCheckBox
        className={className}
        checked={value}
        withText={withText}
        onClick={() => onChange(!value)}
      >
        {withText && <Typography variant="mini2">{children}</Typography>}
      </CustomCheckBox>
    );
  }
)``;

export const ToggleCheckBox = styled.label<{
  checked: boolean;
}>`
  display: flex;
  margin: ${({ theme }) => theme.indents.none};
  cursor: pointer;
  position: relative;

  ::before {
    content: "";
    display: inline-block;
    min-width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme.radius.xxs};
    border: 1px solid ${({ theme }) => theme.color.border.input};
    background: ${({ theme }) => theme.color.background.primary};
  }

  ::after {
    display: ${({ checked }) => (checked ? "block" : "none")};
    position: absolute;
    content: "";
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSA3LjVMNy4wOTU5NCAxMy4wOTU5TDE4LjExMjIgMi4wNzk3MSIgc3Ryb2tlPSIjRkY3NzNEIiBzdHJva2Utd2lkdGg9IjIuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
    min-width: 20px;
    height: 16px;
    left: 3px;
    top: -1px;
  }
`;
