import styled from 'styled-components';
import { Col, Row } from '@ui/components';

export const PromoSection = styled(Row)`
  margin-bottom: -${({ theme }) => theme.indents.s};
`;

export const ContentSection = styled.div`
  margin-top: ${({ theme }) => theme.indents.xxxl};
`;

export const SliderCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;
