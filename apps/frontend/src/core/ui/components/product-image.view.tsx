import styled from "styled-components";

export const ImagePizza = styled.div<{ color: string }>`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
`;
export const ImageDrink = styled.div<{ color: string }>`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
`;
export const ImageSide = styled.div<{ color: string }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 75px 129.9px 75px;
  border-color: transparent transparent ${({ color }) => color} transparent;
`;
