import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  Typography as TypographyType,
  TypographyColorType,
} from "@layouts/Lampastar";

type Props = {
  tag?: string;
  variant?: keyof TypographyType;
  color?: keyof TypographyColorType | "inherit";
  children: ReactNode;
};

type TypographyStyledType = {
  color: keyof TypographyColorType;
  type: keyof TypographyType;
};

const StyledTypographyComponent = styled.div<TypographyStyledType>`
  color: ${({ theme, color }) => (color ? theme.color.text[color] : "inherit")};
  ${({ theme, type }) => theme.typography[type]};
`;

export const Typography = ({
  tag = "span",
  variant = "body1",
  color,
  children,
  ...props
}: Props) => {
  // @ts-ignore
  const WithComponent = StyledTypographyComponent.withComponent(tag);

  return (
    <WithComponent type={variant} color={color} {...props}>
      {children}
    </WithComponent>
  );
};
