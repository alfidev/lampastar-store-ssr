import React from 'react';
import { NewsItemType } from '../types';
import { PageTitle } from '@layouts/Lampastar';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Container, Row, Col } from '@ui/components';
import { Breadcrumbs } from '@ui/components/Breadcrumbs';

type Props = {
  item: NewsItemType;
};

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateBlock = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typography.body4};
  color: ${({ theme }) => theme.color.text.tertiary};
  margin-left: ${({ theme }) => theme.indents.s};
  margin-bottom: ${({ theme }) => theme.indents.xxl};
`;

const TextBlock = styled.div`
  ${({ theme }) => theme.typography.body4};
`;

const StyledCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: ${({ theme }) => theme.radius.xs};
`;

const breadcrumbs = [{ path: '/news', label: 'Новости' }];

export const NewsDetail = ({ item }: Props) => {
  const { title, dateAdded, text, images } = item;

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <TitleBlock>
        <PageTitle>{title}</PageTitle>
        <DateBlock>{format(new Date(dateAdded), 'dd.MM.yyyy')}</DateBlock>
      </TitleBlock>
      <Container>
        <Row>
          <StyledCol desktopS={7}>
            <TextBlock>{text}</TextBlock>
          </StyledCol>
          <Col desktopS={5}>
            <Container>
              <Row indent={10}>
                {images.map(({ q, r }) => {
                  if (q && q.width < q.height)
                    return (
                      <StyledCol key={q?.id} mobile={6}>
                        <StyledImg src={q?.url} />
                      </StyledCol>
                    );
                  if (r && r.width >= r.height)
                    return (
                      <StyledCol key={r?.id} mobile={12}>
                        <StyledImg src={r?.url} />
                      </StyledCol>
                    );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
