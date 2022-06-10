import { color } from "@app/core/ui/theme/api";
import React, { HTMLProps } from "react";
import styled, { css } from "styled-components";

export type CategoryViewProps = {
  id: string;
  title: string;
  selected: boolean;
  onSelect: () => void;
};

export const Category: React.FC<CategoryViewProps> = ({
  selected,
  title,
  onSelect,
}) => (
  <CategoryButton onClick={onSelect} selected={selected} disabled={selected}>
    {title}
  </CategoryButton>
);

type ButtonProps = HTMLProps<HTMLButtonElement> & { selected: boolean };

export const CategoryButton = styled.button<ButtonProps>(({ selected }) => [
  css`
    padding: 4px 8px;
    margin: 0 4px;
    font-size: 20px;
    font-weight: 600;
    color: black;
    border-radius: 4px;
    border: 2px solid black;
  `,
  selected
    ? css`
        border-color: #e5ec00;
        background: linear-gradient(0deg, #f8ff00 0%, #3ad59f 100%);
      `
    : css`
        background: linear-gradient(180deg, #f8ff00 0%, #3ad59f 100%);
        &:hover {
          border-color: ${color("hoverButtonText")};
          color: ${color("hoverButtonText")};
          background: linear-gradient(180deg, #f8ff00 0%, #2a946f 100%);
        }
      `,
]);
