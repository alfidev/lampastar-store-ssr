import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { SizesType } from '@layouts/Lampastar';

type VariantProp = {
  secondary?: boolean;
};

type ButtonType = {
  loading?: boolean;
  disabled?: boolean;
  hideText?: boolean;
  isFluid?: boolean;
};

type ButtonBaseType = {
  icon?: React.FC;
  iconRight?: boolean;
  iconSize?: keyof SizesType;
  noPadding?: boolean;
  children?: ReactNode;
} & ButtonType;

export const ButtonContained = styled.button<VariantProp & ButtonType>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, secondary, disabled }) =>
    (disabled && theme.color.buttons.disabled) ||
    (secondary && theme.color.buttons.secondary) ||
    theme.color.buttons.primary};
  height: 40px;
  padding: 0 ${({ theme, hideText }) => (hideText ? theme.indents.xs : theme.indents.xl)};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
  outline: none;
  color: ${({ disabled, theme, secondary }) =>
    disabled || secondary ? theme.color.text.secondary : theme.color.text.primary};
  width: ${({ isFluid }) => (isFluid ? '100%' : 'auto')};

  :hover {
    background: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryHover) ||
      theme.color.buttons.primaryHover};
  }

  :active {
    background: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryActive) ||
      theme.color.buttons.primaryActive};
  }
`;

const ButtonOutline = styled.button<VariantProp & ButtonType>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 40px;
  padding: 0 ${({ theme, hideText }) => (hideText ? theme.indents.xs : theme.indents.xl)};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid
    ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondary) ||
      theme.color.buttons.primary};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
  outline: none;

  :hover {
    border-color: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryHover) ||
      theme.color.buttons.primaryHover};
  }

  :active {
    border-color: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryActive) ||
      theme.color.buttons.primaryActive};
  }
`;

const ButtonText = styled.button<{ noPadding?: boolean }>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 40px;
  padding: 0 ${({ theme, noPadding }) => (noPadding ? theme.indents.none : theme.indents.xl)};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  color: ${({ theme, disabled }) => (disabled && theme.color.buttons.disabled) || theme.color.buttons.text};

  :hover {
    color: ${({ theme, disabled }) => (disabled && theme.color.buttons.disabled) || theme.color.buttons.textHover};
  }

  :active {
    color: ${({ theme, disabled }) => (disabled && theme.color.buttons.disabled) || theme.color.buttons.textActive};
  }
`;

const ButtonSpan = styled.span<{ isIconRight?: boolean; isIconLeft?: boolean }>`
  margin-left: ${({ isIconLeft, theme }) => (isIconLeft ? theme.indents.s : theme.indents.none)};
  margin-right: ${({ isIconRight, theme }) => (isIconRight ? theme.indents.s : theme.indents.none)};
`;

const ButtonInner = ({ icon: Icon, iconRight, children }: ButtonBaseType) => {
  const isIconLeft = Boolean(!iconRight && Icon);
  const isIconRight = Boolean(iconRight && Icon);
  const hasChildren = Boolean(children);

  return (
    <>
      {isIconLeft && Icon && <Icon />}
      <ButtonSpan isIconLeft={isIconLeft && hasChildren} isIconRight={isIconRight && hasChildren}>
        {children}
      </ButtonSpan>
      {isIconRight && Icon && <Icon />}
    </>
  );
};

const ButtonTextWithIcon = styled(
  ({
    icon,
    iconRight,
    children,
    ...props
  }: ButtonBaseType & { className?: string } & React.HTMLAttributes<HTMLButtonElement>) => {
    return (
      <ButtonText {...props}>
        <ButtonInner icon={icon} iconRight={iconRight}>
          {children}
        </ButtonInner>
      </ButtonText>
    );
  },
)``;

const ButtonContainedWithIcon = styled(
  ({
    icon,
    iconRight,
    children,
    hideText,
    ...props
  }: ButtonBaseType & VariantProp & { className?: string } & React.HTMLAttributes<HTMLButtonElement>) => {
    return (
      <ButtonContained {...props} hideText={hideText}>
        <ButtonInner icon={icon} iconRight={iconRight}>
          {!hideText && children}
        </ButtonInner>
      </ButtonContained>
    );
  },
)``;

const ButtonOutlinedWithIcon = styled(
  ({
    icon,
    iconRight,
    children,
    hideText,
    ...props
  }: ButtonBaseType & VariantProp & { className?: string } & React.HTMLAttributes<HTMLButtonElement>) => {
    return (
      <ButtonOutline {...props} hideText={hideText}>
        <ButtonInner icon={icon} iconRight={iconRight}>
          {!hideText && children}
        </ButtonInner>
      </ButtonOutline>
    );
  },
)``;

export const Button = {
  Text: ButtonTextWithIcon,
  Contained: ButtonContainedWithIcon,
  Outlined: ButtonOutlinedWithIcon,
};
