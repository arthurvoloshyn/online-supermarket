import { ComponentType, FC, PropsWithChildren } from "react";
import styled from "styled-components";

export type LogoProps = {
  LinkComponent: ComponentType<PropsWithChildren<unknown>>;
};

export const Logo: FC<LogoProps> = ({ LinkComponent }) => (
  <LinkComponent>
    <Container>🌃</Container>
  </LinkComponent>
);

const Container = styled.div`
  font-size: 42px;
  user-select: none;
`;
