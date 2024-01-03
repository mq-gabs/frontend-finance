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
    grid-template-rows: auto;
    gap: 2rem;
    ${showUp}
  }

  .categories-create form {
    display: grid;
    gap: 1rem;
  }

  .categories-list {
    display: grid;
    gap: 0.5rem;
  }

  .categories-list ul {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  .category-info {
    color: ${({ theme }) => theme.colors.dark};
  }

  .category-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .icon-button {
    svg {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
`;

export const StyledColorTag = styled.li<{ color: string }>`
  list-style: none;
  color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  border-radius: 0.5rem;
  aspect-ratio: 1/1;
  ${boxShadow}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;
