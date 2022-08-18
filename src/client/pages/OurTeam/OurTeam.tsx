import React from "react";
import { teams } from "./constants";
import { Container, Row } from "styled-bootstrap-grid";
import {
  StyledCard,
  StyledCol,
  StyledDescriptions,
  StyledImage,
  StyledName,
} from "./styled";
import { SHOW_ADMIN, useFeature } from "@common/featureToggles";

export const OurTeam = () => {
  const isShowHidden = useFeature(SHOW_ADMIN);

  const filteredMembers = isShowHidden
    ? teams
    : teams.filter(({ hidden }) => !hidden);

  return (
    <Container fluid>
      <Row>
        {filteredMembers.map(({ id, image, name, descriptions }) => (
          <StyledCol key={id} xs={12} sm={6} md={4} lg={4}>
            <StyledCard>
              {image && <StyledImage src={image} />}
              <StyledName>{name}</StyledName>
              <StyledDescriptions>{descriptions}</StyledDescriptions>
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
    </Container>
  );
};
