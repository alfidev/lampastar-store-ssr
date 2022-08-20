import React from "react";
import { TEAM } from "./constants";
import { Row } from "styled-bootstrap-grid";
import {
  DepartmentContainer,
  DepartmentHead,
  DepartmentTitle,
  Divider,
  StyledCard,
  StyledCol,
  StyledDescription,
  StyledImage,
  StyledName,
  WrapperContainer,
} from "./styled";
import {
  NEW_OUR_TEAM_DESIGN,
  SHOW_ADMIN,
  useFeature,
} from "@common/featureToggles";
import { locale } from "./locale";
import { Department } from "./types";

const getTeams = (isShowHidden: boolean) =>
  Object.keys(TEAM)
    .map((key) => {
      const members = TEAM[key as Department];
      return {
        key,
        title: locale.departments[key as Department],
        members: isShowHidden
          ? members
          : members.filter(({ hidden }) => !hidden),
      };
    })
    .filter(({ members }) => members.length);

export const OurTeam = () => {
  const isShowHidden = useFeature(SHOW_ADMIN);
  const isNewDesign = useFeature(NEW_OUR_TEAM_DESIGN);

  const team = getTeams(isShowHidden);

  if (isNewDesign) {
    return (
      <WrapperContainer>
        {team.map(({ key, title, members }) => (
          <DepartmentContainer key={key}>
            <DepartmentHead>
              <DepartmentTitle>{title}</DepartmentTitle>
            </DepartmentHead>
            <Divider />
            <Row justifyContent="center">
              {members.map(({ id, image, name, description }) => (
                <StyledCol key={id} xs={12} sm={6} md={4} lg={4}>
                  <StyledCard>
                    {image && <StyledImage src={image} />}
                    <StyledName>{name}</StyledName>
                    <StyledDescription>{description}</StyledDescription>
                  </StyledCard>
                </StyledCol>
              ))}
            </Row>
          </DepartmentContainer>
        ))}
      </WrapperContainer>
    );
  }

  return (
    <WrapperContainer>
      <Row>
        {team.map(({ members }) =>
          members.map(({ id, image, name, description }) => (
            <StyledCol key={id} xs={12} sm={6} md={4} lg={3}>
              <StyledCard>
                {image && <StyledImage src={image} />}
                <StyledName>{name}</StyledName>
                <StyledDescription>{description}</StyledDescription>
              </StyledCard>
            </StyledCol>
          ))
        )}
      </Row>
    </WrapperContainer>
  );
};
