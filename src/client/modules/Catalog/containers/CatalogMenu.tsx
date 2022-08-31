import React, { useEffect, useState } from 'react';
import { useCategories } from '@modules/Catalog/hooks';
import { CatalogMenuSkeleton } from '../components';
import { Col, Container, Row } from '@ui/components/Adaptive';
import styled from 'styled-components';
import { Button, List, ListItem, ListItemLite } from '@ui/components';
import { CategoryMap } from '@modules/Catalog/types';
import { Typography } from '@ui/components/Typography';
import { useMediaQuery } from '@ui/hooks/useMediaQuery';
import { ArrowLeft } from '@ui/icons';

type Props = {
  closeMenu: () => void;
};

const StyledColumn = styled(Col)`
  border-right: 1px solid ${({ theme }) => theme.color.border.input};
`;

const StyledColumnSecondary = styled(Col)`
  margin-top: ${({ theme }) => theme.indents.l};
`;

const StyledCategoryItem = styled(Typography)`
  cursor: pointer;
`;

const renderSecondaryCategory = (
  onCLick: (id: string) => void,
  isMobileOrTablet: boolean,
  currentCategory?: CategoryMap,
) => {
  if (isMobileOrTablet)
    return (
      <List>
        {currentCategory?.list.map(({ id, name }) => (
          <ListItem key={id} onClick={() => onCLick(id)}>
            {name}
          </ListItem>
        ))}
      </List>
    );

  return (
    <Row>
      {currentCategory?.list.map(({ id, name, list }) => (
        <StyledColumnSecondary key={id} desktopS={6}>
          <StyledCategoryItem variant="body3" tag="p" onClick={() => onCLick(id)}>
            {name}
          </StyledCategoryItem>

          <List>
            {list.map(({ id, name }) => (
              <ListItemLite key={id} onClick={() => onCLick(id)}>
                {name}
              </ListItemLite>
            ))}
          </List>
        </StyledColumnSecondary>
      ))}
    </Row>
  );
};

export const CatalogMenu = ({ closeMenu }: Props) => {
  const [currentCategory, setCurrentCategory] = useState<CategoryMap>();
  const { isLoading, list } = useCategories();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 'tablet' });

  useEffect(() => {
    if (list && !isMobileOrTablet) setCurrentCategory(list[0]);
  }, [list]);

  if (isLoading) return <CatalogMenuSkeleton />;

  const onClickFinalCategoryHandler = (id: string) => {
    console.log(id);
  };

  return (
    <>
      {isMobileOrTablet && (
        <Button.Text
          icon={ArrowLeft}
          onClick={() => (currentCategory ? setCurrentCategory(undefined) : closeMenu())}
          noPadding
        >
          Назад
        </Button.Text>
      )}
      <Container>
        <Row>
          {(!isMobileOrTablet || !currentCategory) && (
            <StyledColumn desktopS={4}>
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
          )}
          <Col desktopS={8}>
            <Container>
              <Typography variant="title2">{currentCategory?.name}</Typography>
              {renderSecondaryCategory(onClickFinalCategoryHandler, isMobileOrTablet, currentCategory)}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
