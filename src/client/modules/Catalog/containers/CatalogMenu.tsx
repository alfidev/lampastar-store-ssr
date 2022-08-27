import React, { useEffect, useState } from 'react';
import { useCategories } from '@modules/Catalog/hooks';
import { CatalogMenuSkeleton } from '../components';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { List, ListItem, ListItemLite } from '@ui/components';
import { CategoryMap } from '@modules/Catalog/types';
import { Typography } from '@ui/components/Typography';

const StyledColumn = styled(Col)`
  border-right: 1px solid ${({ theme }) => theme.color.border.input};
`;

const StyledColumnSecondary = styled(Col)`
  margin-top: ${({ theme }) => theme.indents.l};
`;

export const CatalogMenu = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryMap>();
  const { isLoading, list } = useCategories();

  useEffect(() => {
    if (list) setCurrentCategory(list[0]);
  }, [list]);

  if (isLoading) return <CatalogMenuSkeleton />;

  return (
    <Container fluid>
      <Row>
        <StyledColumn sm={4}>
          <List>
            {list?.map((category) => (
              <ListItem
                key={category.id}
                onClick={() => setCurrentCategory(category)}
                active={category.id === currentCategory?.id}
              >
                {category.name}
              </ListItem>
            ))}
          </List>
        </StyledColumn>
        <Col sm={8}>
          <Container fluid>
            <Typography variant="title2">{currentCategory?.name}</Typography>
            <Row>
              {currentCategory?.list.map(({ id, name, list }) => (
                <StyledColumnSecondary key={id} sm={6}>
                  <Typography variant="body3" tag="p">
                    {name}
                  </Typography>
                  <List>
                    {list.map(({ id, name }) => (
                      <ListItemLite key={id}>{name}</ListItemLite>
                    ))}
                  </List>
                </StyledColumnSecondary>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
