import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useCategories } from '@modules/Catalog/hooks';
import { CategoryMap } from '@modules/Catalog/types';
import { Button, List, ListItem, ListItemLite } from '@ui/components';
import { Col, Container, Row } from '@ui/components/Adaptive';
import { Typography } from '@ui/components/Typography';
import { useMediaQuery } from '@ui/hooks/useMediaQuery';
import { ChevronLeft } from '@ui/icons';

import { CatalogMenuSkeleton } from '../components';

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
  }, [isMobileOrTablet, map]);

  const navigateToCategory = (category: CategoryMap) => {
    navigate(`/catalog/${category.id}`);
    closeMenu();
  };

  const onClickFinalCategoryHandler = (category: CategoryMap) => {
    navigateToCategory(category);
  };

  const onClickPrimaryCategory = (category: CategoryMap) => {
    if (category.list.length) {
      setCurrentCategory(category);
      return;
    }

    navigateToCategory(category);
  };

  if (isLoading) return <CatalogMenuSkeleton />;

  return (
    <>
      {isMobileOrTablet && (
        <Button.Text icon={ChevronLeft} onClick={() => (currentCategory ? setCurrentCategory(undefined) : closeMenu())}>
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
