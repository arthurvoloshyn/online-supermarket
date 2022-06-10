import { Button } from "@app/core/ui/components/button";
import { FC, ReactElement } from "react";
import styled from "styled-components";

export type ProductDetailsProps = {
  details:
    | {
        name: string;
        price: string;
        description: string;
        imageElement: ReactElement;
        onAdd: () => void;
        onRemove: () => void;
      }
    | undefined;
  loader: {
    inProgress: boolean;
    error: boolean;
    retry: () => void;
  };
};

export const ProductDetails: FC<ProductDetailsProps> = ({
  details: { name, price, description, imageElement, onAdd, onRemove } = {},
  loader: { inProgress, error, retry },
}) => (
  <Container>
    {name != undefined ? (
      <>
        <ImageContainer>{imageElement}</ImageContainer>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>For only: {price}</p>
        <ButtonsContainer>
          <Button onClick={onAdd}>Add</Button>
          <Button onClick={onRemove}>Remove</Button>
        </ButtonsContainer>
      </>
    ) : inProgress ? (
      <div>Loading...</div>
    ) : error ? (
      <div>
        Error while loading <Button onClick={retry}>🔄 Retry</Button>
      </div>
    ) : null}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 32px 16px 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
