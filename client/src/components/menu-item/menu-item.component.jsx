import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  MenuItemTitleContainer,
  SubTitleContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      />
      <ContentContainer className="content">
        <MenuItemTitleContainer>{title.toUpperCase()}</MenuItemTitleContainer>
        <SubTitleContainer>SHOP NOW</SubTitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
