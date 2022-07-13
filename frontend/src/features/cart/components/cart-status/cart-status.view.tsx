import { cloneElement, FC, ReactElement } from "react";
import styled from "styled-components";

export type CartStatusProps = {
  count: string;
  linkToCartPage: ReactElement;
};

export const CartStatus: FC<CartStatusProps> = ({ count, linkToCartPage }) =>
  cloneElement(linkToCartPage, undefined, <Container>{count}🛒</Container>);

const Container = styled.div`
  font-size: 40px;
`;
