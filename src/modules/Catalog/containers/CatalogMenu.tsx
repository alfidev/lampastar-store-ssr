'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, List, ListItem } from '../../../ui/components';
import { Col, Container, Row } from '../../../ui/components/Adaptive';
import { Typography } from '../../../ui/components/Typography';
import { useMediaQuery } from '../../../ui/hooks/useMediaQuery';
import { ChevronLeft } from '../../../ui/icons';
import { CatalogMenuSkeleton } from '../components';
import { useCategories } from '../hooks';
import { CategoryMap } from '../types';

type Props = {
  closeMenu: () => void;
};

const StyledColumn = styled(Col)`
  border-right: 1px solid ${({ theme }) => theme.color.border.input};
`;

const StyledColumnSecondary = styled(Col)`
  margin-top: ${({ theme }) => theme.indents.s};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledCategoryItem = styled(Typography)`
  cursor: pointer;
  margin: 0;
  padding: ${({ theme }) => theme.indents.xxs} ${({ theme }) => theme.indents.s};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.xxs};

  :hover {
    background: ${({ theme }) => theme.color.background.tertiary};
  }
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
      <StyledColumnSecondary desktopS={12}>
        {currentCategory?.list.map((parentCategory) => (
          <StyledCategoryItem key={parentCategory.id} variant="body4" tag="p" onClick={() => onCLick(parentCategory)}>
            {parentCategory.name}
          </StyledCategoryItem>
        ))}
      </StyledColumnSecondary>
    </Row>
  );
};

export const CatalogMenu = ({ closeMenu }: Props) => {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState<CategoryMap>();
  const { isLoading, map } = useCategories();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 'tablet' });

  useEffect(() => {
    if (map && !isMobileOrTablet) setCurrentCategory(map[0]);
  }, [isMobileOrTablet, map]);

  const navigateToCategory = (category: CategoryMap) => {
    router.push(`/catalog/${category.id}/1`);
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
