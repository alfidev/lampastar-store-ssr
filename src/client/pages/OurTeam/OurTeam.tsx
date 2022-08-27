import React from 'react';
import { TEAM } from './constants';
import { Row } from '@ui/components/Adaptive';
import { Divider, StyledCard, StyledCol, StyledDescription, StyledImage, StyledName, WrapperContainer } from './styled';
import { SHOW_ADMIN, useFeature } from '@common/featureToggles';
import { locale } from './locale';
import { Department } from './types';
import { PageTitle } from '@layouts/Lampastar';

const { title } = locale;

const getTeams = (isShowHidden: boolean) =>
  Object.keys(TEAM)
    .map((key) => {
      const members = TEAM[key as Department];
      return {
        key,
        title: locale.departments[key as Department],
        members: isShowHidden ? members : members.filter(({ hidden }) => !hidden),
      };
    })
    .filter(({ members }) => members.length);

export const OurTeam = () => {
  const isShowHidden = useFeature(SHOW_ADMIN);

  const team = getTeams(isShowHidden);

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Divider />
      <WrapperContainer>
        <Row>
          {team.map(({ members }) =>
            members.map(({ id, image, name, description }) => (
              <StyledCol key={id} mobile={12} tablet={6} desktopS={4} desktopM={3}>
                <StyledCard>
                  {image && <StyledImage src={image} />}
                  <StyledName>{name}</StyledName>
                  <StyledDescription>{description}</StyledDescription>
                </StyledCard>
              </StyledCol>
            )),
          )}
        </Row>
      </WrapperContainer>
    </>
  );
};
