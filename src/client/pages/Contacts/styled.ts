import styled from "styled-components";
import { Typography } from "@ui/components/Typography";
import { media } from "styled-bootstrap-grid";

export const MapAndFormContainer = styled.div`
  margin-top: 40px;
  ${media.lg`
    display: flex;
    margin-top: 120px;
  `}
`;

export const MapContainer = styled.div`
  ${({ theme }) => media.sm`
    margin-right: ${theme.indents.xl};
  `}
`;

export const MapBlock = styled.div`
  width: 456px;

  ${media.xs`
    width: 100%;
  `}

  ymaps {
    border-radius: ${({ theme }) => theme.radius.xs};
  }
`;

export const ContactContainer = styled.div`
  height: 452px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ContactColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactColumn = styled.div`
  max-width: 265px;
  margin-right: ${({ theme }) => theme.indents.xxl};

  &:last-child {
    margin-right: ${({ theme }) => theme.indents.none};
  }
`;

export const Details = styled.div`
  margin-left: ${({ theme }) => theme.indents.xxl};
`;

export const StyledParagraph = styled(Typography)`
  margin: 0;
`;

export const StyledTitle = styled(Typography)`
  display: flex;
`;

export const ContactBlock = styled.div`
  margin: ${({ theme }) => theme.indents.xs} 0;
`;
