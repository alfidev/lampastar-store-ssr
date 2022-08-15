import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  Typography as TypographyType,
  TypographyColorType,
} from "@layouts/Lampastar";

type Props = {
  tag?: string;
  variant?: keyof TypographyType;
  children?: ReactNode;
  color?: keyof TypographyColorType;
};

const TypographyComponent = ({
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  className,
  children,
  tag = "span",
  ...props
}: Props) => React.createElement(tag, { ...props, className }, children);

export const Typography = styled(TypographyComponent)`
  ${({ theme, color }) => (color ? `color: ${theme.color.text[color]}` : "")};
  ${({ theme, variant }) => theme.typography[variant || "body1"]};
`;
