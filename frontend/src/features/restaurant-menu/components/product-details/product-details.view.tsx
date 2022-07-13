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
        addTitle: string;
        onAdd: () => void;
        onRemove: (() => void) | undefined;
      }
    | undefined;
  loader: {
    inProgress: boolean;
    error: boolean;
    retry: () => void;
  };
};

export const ProductDetails: FC<ProductDetailsProps> = ({
  details: {
    name,
    price,
    description,
    imageElement,
    onAdd,
    addTitle,
    onRemove,
  } = {},
  loader: { inProgress, error, retry },
}) => (
  <Container>
    {name != null ? (
      <>
        {inProgress && <UpdateLoader>Updating...</UpdateLoader>}
        <ImageContainer>{imageElement}</ImageContainer>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>For only: {price}</p>
        <ButtonsContainer>
          <Button onClick={onAdd}>{addTitle}</Button>
          <Button onClick={onRemove} disabled={!onRemove}>
            Remove
          </Button>
        </ButtonsContainer>
      </>
    ) : error ? (
      <div>
        Error while loading <Button onClick={retry}>🔄 Retry</Button>
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 32px 16px 16px;
  position: relative;
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

const UpdateLoader = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;
