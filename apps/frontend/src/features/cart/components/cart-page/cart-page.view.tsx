import { Button } from "@app/core/ui/components/button";
import { FC } from "react";
import styled from "styled-components";
import { CartItem, CartItemProps } from "./cart-item.view";

export type CartPageProps = {
  itemsProps: CartItemProps[];
  totalPrice: string;
  onCheckout: () => void;
};

export const CartPage: FC<CartPageProps> = ({
  itemsProps: itemProps,
  onCheckout,
  totalPrice,
}) => (
  <Container>
    <h2>Your order</h2>
    <TotalRow>
      <Price>Total: {totalPrice}</Price>
      <div>
        <Button onClick={onCheckout}>Checkout</Button>
      </div>
    </TotalRow>
    {itemProps.map((item) => (
      <CartItem {...item} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 32px 16px 16px;
`;

const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-top: 4px;
`;
