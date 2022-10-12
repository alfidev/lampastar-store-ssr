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
import { useNavigate } from 'react-router-dom';

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
  onCLick: (category: CategoryMap) => void,
  isMobileOrTablet: boolean,
  currentCategory?: CategoryMap,
) => {
  if (isMobileOrTablet)
    return (
      <List>
        {currentCategory?.list.map((category) => (
          <ListItem key={category.id} onClick={() => onCLick(category)}>
            {category.name}
          </ListItem>
        ))}
      </List>
    );

  return (
    <Row>
      {currentCategory?.list.map((parentCategory) => (
        <StyledColumnSecondary key={parentCategory.id} desktopS={6}>
          <StyledCategoryItem variant="body3" tag="p" onClick={() => onCLick(parentCategory)}>
            {parentCategory.name}
          </StyledCategoryItem>

          <List>
            {parentCategory.list.map((category) => (
              <ListItemLite key={category.id} onClick={() => onCLick(category)}>
                {category.name}
              </ListItemLite>
            ))}
          </List>
        </StyledColumnSecondary>
      ))}
    </Row>
  );
};

export const CatalogMenu = ({ closeMenu }: Props) => {
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState<CategoryMap>();
  const { isLoading, map } = useCategories();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 'tablet' });

  useEffect(() => {
    if (map && !isMobileOrTablet) setCurrentCategory(map[0]);
  }, [map]);

  const navigateToCategory = (category: CategoryMap) => {
    navigate(`/catalog/${category.id}`);
    closeMenu();
  };

  const onClickFinalCategoryHandler = (category: CategoryMap) => {
    navigateToCategory(category);
  };

  const onClickPrimaryCategory = (category: CategoryMap) => {
    if (category.list.length) return setCurrentCategory(category);

    navigateToCategory(category);
  };

  if (isLoading) return <CatalogMenuSkeleton />;

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
                {map?.map((category) => (
                  <ListItem
                    key={category.id}
                    onClick={() => onClickPrimaryCategory(category)}
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
