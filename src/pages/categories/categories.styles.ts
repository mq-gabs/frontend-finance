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
    gap: 1rem;
    ${showUp}
  }

  .categories-create form {
    display: grid;
    gap: 1rem;
  }

  .categories-list {
    margin: 0 auto;
    display: grid;
    gap: 0.5rem;
    width: 500px;
    max-width: 500px;
  }

  .categories-list ul {
    display: grid;
    gap: 0.5rem;
    width: 100%;
  }

  .categories-list ul li {
    list-style: none;
    color: ${({ theme }) => theme.colors.dark};
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    height: 3rem;
    ${boxShadow}
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .category-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

export const StyledColorTag = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: ${({ color }) => color};
  ${boxShadow}
`;
