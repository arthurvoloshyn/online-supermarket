import { FC } from "react";
import styled from "styled-components";

export const EmptyCartPage: FC<{}> = () => (
  <Container>
    <h2>Your order</h2>
    <Message>Add items in the menu</Message>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 32px 16px 16px;
`;

const Message = styled.div`
  font-size: 20px;
  color: #666;
  font-weight: 200;
  margin-top: 4px;
`;
