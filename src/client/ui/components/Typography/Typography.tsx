import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Typography as TypographyType, TypographyColorType } from '@layouts/Lampastar/types';

type Props = {
  tag?: string;
  variant?: keyof TypographyType;
  children?: ReactNode;
  color?: keyof TypographyColorType;
};

const TypographyComponent = ({
  className,
  children,
  tag = 'span',
  ...props
}: Props & { className?: string } & React.HTMLAttributes<HTMLSpanElement>) =>
  React.createElement(tag, { ...props, className }, children);

export const Typography = styled(TypographyComponent)`
  ${({ theme, color }) => (color ? `color: ${theme.color.text[color]}` : '')};
  ${({ theme, variant }) => theme.typography[variant || 'body1']};
`;

Typography.displayName = 'Typography';
