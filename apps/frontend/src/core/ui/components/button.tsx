import { color, gradient } from "@app/core/ui/theme/api";
import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 12px;
  background: ${gradient("buttonBg")};
  margin: 8px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  &:hover:enabled {
    border-color: ${color("hoverButtonText")};
    color: ${color("hoverButtonText")};
    background: ${gradient("buttonBgHover")};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
