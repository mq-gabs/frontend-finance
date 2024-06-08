import styled from "styled-components";
import { boxShadow, showUp } from "../../assets/theme/animations";

export const StyledNotes = styled.main`
  h1 {
    font-size: 1.5rem;
  }

  ${showUp}
`;

export const StyledContent = styled.div`
  display: flex;
`;

export const StyledNotesListing = styled.div`
  min-width: 400px;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 800px;
  height: fit-content;
  overflow-y: auto;

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

export const StyledNoteContent = styled.div`
  width: calc(100% - 400px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.3rem;
  }
`;

export const StyledNote = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  ${boxShadow}

  h4 {
    font-size: 1.1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

