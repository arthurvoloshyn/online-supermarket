import { gradient } from "@app/core/ui/theme/api";
import styled from "styled-components";
import { Category, CategoryViewProps } from "../category/category.view";

export type CategoriesViewProps = {
  categories: CategoryViewProps[];
};

export const Categories: React.FC<CategoriesViewProps> = ({ categories }) => (
  <Container>
    {categories.map((props) => (
      <Category key={props.id} {...props} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${gradient("menuBg")};
  padding: 8px;
  border-radius: 8px;
  margin-top: 16px;
`;
