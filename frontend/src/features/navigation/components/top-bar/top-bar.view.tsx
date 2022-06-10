import { ComponentType, FC } from "react";
import styled from "styled-components";
import { Logo } from "../logo/logo.view";
import { SiteTitle, SiteTitleProps } from "../site-title/site-title.view";

type TopBarProps = {
  CartStatus: ComponentType;
  LinkToRoot: SiteTitleProps["LinkComponent"];
};

export const TopBar: FC<TopBarProps> = ({ CartStatus, LinkToRoot }) => (
  <Container>
    <Logo LinkComponent={LinkToRoot} />
    <SiteTitle LinkComponent={LinkToRoot} />
    <CartStatus />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 16px 0;
`;
