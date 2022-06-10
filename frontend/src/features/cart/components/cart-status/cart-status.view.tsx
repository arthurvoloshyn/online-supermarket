import { FC } from "react";
import styled from "styled-components";

export type CartStatusProps = {
  count: string;
};

export const CartStatus: FC<CartStatusProps> = ({ count }) => (
  <Container>{count}🛒</Container>
);

const Container = styled.div`
  font-size: 40px;
`;
