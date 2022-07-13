import React, { ReactElement } from "react";
import styled from "styled-components";

export type MenuItemsProps = {
  items: ReactElement[];
  loader: MenuItemsLoaderProps;
};

export type MenuItemsLoaderProps = {
  inProgress: boolean;
  error: boolean;
  retry: () => void;
};

export const MenuItems: React.FC<MenuItemsProps> = ({ items, loader }) => (
  <Container>
    {items.length === 0 ? (
      <>
        {loader.inProgress && <div>Loading...</div>}
        {loader.error && (
          <div>
            Error <button onClick={loader.retry}>🔄 retry</button>
          </div>
        )}
      </>
    ) : (
      <div>
        {loader.inProgress && <StatusMessage>Updating...</StatusMessage>}
        <ItemsContainer>{items}</ItemsContainer>
      </div>
    )}
  </Container>
);

const Container = styled.div`
  margin-top: 20px;
`;

const StatusMessage = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

// https://css-tricks.com/an-auto-filling-css-grid-with-max-columns/
const ItemsContainer = styled.div`
  /* input */
  --grid-layout-gap: 20px;
  --grid-column-max-count: 3;
  --grid-item-min-width: 320px;
  /* calculate */
  --gap-count: calc(var(--grid-column-max-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item-max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-max-count)
  );
  /* apply */
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item-min-width), var(--grid-item-max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
`;
