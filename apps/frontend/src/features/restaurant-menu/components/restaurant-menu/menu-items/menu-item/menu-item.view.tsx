import { Button } from "@app/core/ui/components/button";
import { color, gradient } from "@app/core/ui/theme/api";
import { cloneElement, ReactElement } from "react";
import styled from "styled-components";

export type MenuItemProps = {
  id: string;
  title: string;
  price: string;
  imageElement: ReactElement;
  addTitle: string;
  add: () => void;
  linkElement: ReactElement;
};

export const MenuItem = ({
  id,
  title,
  price,
  imageElement,
  add,
  addTitle,
  linkElement: LinkElement,
}: MenuItemProps) => (
  <Container key={id}>
    {cloneElement(
      LinkElement,
      undefined,
      <>
        <ImageContainer>{imageElement}</ImageContainer>
        <Title>{title}</Title>
        <Price>
          <span>{price}</span>
        </Price>
      </>
    )}
    <Button onClick={add}>{addTitle}</Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid ${color("menuBg2")};
  flex-direction: column;
  background-color: ${color("pageBg")};
  &:hover {
    border-color: ${color("hoverButtonText")};
    box-shadow: 0px 0px 15px -5px ${color("hoverButtonText")};
  }
  a {
    text-decoration: none;
    color: ${color("text")};
  }
`;

const ImageContainer = styled.div`
  align-self: stretch;
  background: ${gradient("photoBg")};
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  div {
    margin-top: 12px;
    margin-left: -25%;
  }
`;

const Title = styled.h3`
  padding: 4px 8px;
  font-size: 22px;
  line-height: 1.5;
`;

const Price = styled.div`
  padding: 4px 8px;
  font-size: 20px;
  font-weight: 200;
`;
