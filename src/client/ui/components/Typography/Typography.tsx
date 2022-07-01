import React, { ReactNode } from "react";
import styled from "styled-components";
import { Typography as TypographyType } from "@layouts/Lampastar";

type Props = {
  tag?: string;
  variant?: keyof TypographyType;
  children: ReactNode;
};

const StyledTypography = (
  type: keyof TypographyType,
  Element: React.ReactElement
) =>
  styled(({ className }) => (
    <Element.type {...Element.props} className={className} />
  ))`
    ${({ theme }) => theme.typography[type]}
  `;

export const Typography = ({
  tag = "span",
  variant = "body1",
  children,
  ...rest
}: Props) => {
  const element = React.createElement(
    tag,
    {
      ...rest,
    },
    children
  );

  const Component = StyledTypography(variant, element);

  return <Component />;
};
