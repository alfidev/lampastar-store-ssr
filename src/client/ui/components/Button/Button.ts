import styled from "styled-components";

type ButtonVariant = "primary" | "secondary";

export const Button = styled.button<{
  variant?: ButtonVariant;
  outline?: boolean;
}>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, variant = "primary" }) =>
    variant === "primary"
      ? theme.color.background.tertiary
      : theme.color.background.primary};
  height: 40px;
  padding: 0 ${({ theme }) => theme.indents.xl};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: none;
  cursor: pointer;
  white-space: nowrap;

  :focus {
    outline: none;
  }
`;
