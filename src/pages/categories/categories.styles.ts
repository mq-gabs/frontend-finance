import styled from "styled-components";
import { boxShadow, showUp } from "../../assets/theme/animations";

export const StyledCategories = styled.main`
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .categories-content {
    display: grid;
    grid-template-columns: 30% 70%;
    // grid-template-rows: auto;
    gap: 2rem;
    ${showUp}
  }

  .categories-create form {
    display: grid;
    gap: 1rem;
  }

  .categories-list {
  }

  .categories-list ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
  }

  .category-info {
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 700;
    text-transform: uppercase;
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
