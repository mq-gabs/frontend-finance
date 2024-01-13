import styled from "styled-components";
import { boxShadow, showUp } from "../../assets/theme/animations";

export const StyledCategories = styled.main`
  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .categories-content {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 1rem;
    ${showUp}
  }

  .categories-create form {
    display: grid;
    gap: 1rem;
  }

  // .categories-list {
  // }

  .categories-list ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .category-info {
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  .category-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const StyledCategoryCard = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  border-radius: 0.5rem;
  ${boxShadow}
  width: 12rem;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;
