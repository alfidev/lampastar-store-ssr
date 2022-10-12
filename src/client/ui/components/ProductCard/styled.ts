import styled from 'styled-components';
import { Card } from '../Card';

export const ImageBox = styled.div`
  height: 170px;
  display: flex;
  justify-content: center;

  svg {
    max-height: 100%;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const TopBlock = styled.div`
  flex-grow: 1;
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  /* Ограничиваем блок текста тремя строками */
  -webkit-line-clamp: 3;
`;

export const PriceContainer = styled.div`
  margin-top: ${({ theme }) => theme.indents.m};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ActualPrice = styled.div`
  ${({ theme }) => theme.typography.main1};
  margin-left: 10px;
`;

export const OldPrice = styled.div`
  ${({ theme }) => theme.typography.main2};
  color: ${({ theme }) => theme.color.text.light};
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    top: calc(50% - 1px);
    height: 2px;
    background: ${({ theme }) => theme.color.text.light};
    transform: rotate(175deg);
  }
`;
