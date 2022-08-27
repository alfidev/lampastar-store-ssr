import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { ListItemSkeleton, TextSkeleton } from '@ui/components/Skeleton';

const StyledListSkeleton = styled.div`
  padding-right: ${({ theme }) => theme.indents.l};
  margin-right ${({ theme }) => theme.indents.l};
  border-right: 1px solid ${({ theme }) => theme.color.border.input};
`;

const StyledColumnSecondary = styled(Col)`
  margin-top: ${({ theme }) => theme.indents.xl};
`;

const getRandomWidth = () => {
  const rand = Math.random();

  return `${30 + 70 * rand}%`;
};

const items = [...Array(11)].map(() => getRandomWidth());

export const CatalogMenuSkeleton = React.memo(() => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <StyledListSkeleton>
            {items.map((width, index) => (
              <ListItemSkeleton key={index} width={width} active={index === 2} />
            ))}
          </StyledListSkeleton>
        </Col>
        <Col sm={9}>
          <Container fluid>
            <TextSkeleton width={140} />
            <Row>
              {[...Array(5)].map((item, index) => (
                <StyledColumnSecondary key={index} sm={6}>
                  <TextSkeleton width="50%" size="body2" />
                  {[...Array(2)].map((item, index) => (
                    <StyledColumnSecondary key={index} sm={6}>
                      <TextSkeleton width="50%" size="mini2" />
                    </StyledColumnSecondary>
                  ))}
                </StyledColumnSecondary>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
});

CatalogMenuSkeleton.displayName = 'CatalogMenuSkeleton';