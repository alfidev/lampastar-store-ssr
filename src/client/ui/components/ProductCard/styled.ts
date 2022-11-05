import styled from 'styled-components';
import { Card } from '../Card';
import { Button } from '@ui/components';

export const ImageBox = styled.div`
  height: 170px;
  display: flex;
  justify-content: center;

  svg,
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageBoxLine = styled(ImageBox)`
  min-width: 170px;
  max-width: 170px;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const StyledCardLine = styled(Card)`
  display: flex;
`;

export const TopBlock = styled.div`
  flex-grow: 1;
`;

export const LeftBlock = styled.div`
  margin-right: ${({ theme }) => theme.indents.m};
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  /* Ограничиваем блок текста тремя строками */
  -webkit-line-clamp: 3;
`;

export const InfoBlock = styled.div`
  flex-grow: 1;
  margin-right: ${({ theme }) => theme.indents.m};

  ${NameContainer} {
    ${({ theme }) => theme.typography.body5}
  }
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
  white-space: nowrap;
`;

export const OldPrice = styled.div`
  white-space: nowrap;
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

export const ActionsBlock = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.indents.m};
`;

export const AdditionalButton = styled(Button.Text)<{ active: boolean }>`
  color: ${({ theme, active }) => (active ? theme.color.buttons.secondaryActive : theme.color.text.lightTwo)};
  padding-left: 0;
  padding-right: 0;
  margin-left: ${({ theme }) => theme.indents.m};

  :hover {
    color: ${({ theme }) => theme.color.buttons.secondaryHover};
  }
`;
