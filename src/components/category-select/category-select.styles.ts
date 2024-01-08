import styled from "styled-components";
import { boxShadow, bright } from "../../assets/theme/animations";

export const StyledCategorySelectWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const StyledCategorySelect = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 0.5rem;
  padding: 1rem;

  > p {
    color: ${({ theme }) => theme.colors.dark};
  }

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .icon-wrap {
    ${boxShadow}
    border-radius: 50%;
    padding: 1rem;
  }

  .icon-of-dialog {
    border-radius: 0.5rem;
    ${boxShadow}
    padding: 1rem;
    cursor: pointer;
  }

  .icon-of-dialog:hover {
    ${bright}
    transform: size(1.1);
  }
`;

export const StyledCategorySelectContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledCategorySelectActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIconsDialogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  overflow-y: auto;
  padding: 1rem;
  max-height: 500px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
