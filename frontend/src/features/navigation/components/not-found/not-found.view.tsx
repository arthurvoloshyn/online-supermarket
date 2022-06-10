import { color } from "@app/core/ui/theme/api";
import { FC } from "react";
import { Planet } from "react-kawaii";
import styled from "styled-components";

export const NotFound: FC<{}> = () => (
  <Container>
    <SadPizza />
    <Title>Sorry Mario, but your pizza is on another page...</Title>
  </Container>
);

const Container = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SadPizza = styled(Planet).attrs((props) => ({
  size: 220,
  mood: "sad",
  color: color("notFoundPizza")(props),
}))`
  ::before {
    content: "";
    display: block;
    position: absolute;
    box-shadow: 0px 0px 34px -3px ${color("logo")};
    top: 0;
    left: 0;
    width: 220px;
    height: 220px;
    border-radius: 160px;
  }
`;

const Title = styled.h2`
  margin-top: 16px;
  text-align: center;
`;
