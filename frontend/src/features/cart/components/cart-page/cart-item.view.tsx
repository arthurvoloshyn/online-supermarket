import { Button } from "@app/core/ui/components/button";
import { FC, ReactNode } from "react";
import styled from "styled-components";

export type CartItemProps = {
  key: string;
  title: string;
  count: string;
  price: string;
  imageElement: ReactNode;
  onAdd: () => void;
  onRemove: () => void;
};
export const CartItem: FC<CartItemProps> = ({
  title,
  count,
  price,
  onAdd,
  onRemove,
  imageElement,
}) => (
  <Container>
    <TopRow>
      {imageElement}
      <Fields>
        <Title>{title}</Title>
        <Field>Count: {count}</Field>
        <Field>Total: {price}</Field>
      </Fields>
    </TopRow>
    <ButtonsRow>
      <Button onClick={onAdd}>One more</Button>
      <Button onClick={onRemove}>Remove</Button>
    </ButtonsRow>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border: 1px dashed #ccc;
  padding: 16px;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const Field = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-top: 4px;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
