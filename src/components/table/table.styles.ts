import styled from "styled-components";
import { boxShadow } from "../../assets/theme/animations";

export const StyledTable = styled.table<{ size: number }>`
  ${boxShadow}
  width: 100%;
  border-spacing: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};

  tr {
    display: grid;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
    grid-template-rows: 1fr;
    overflow: hide;
  }

  tr:nth-child(1) > th:nth-child(1) {
    border-radius: 0.5rem 0 0 0;
  }

  tr:nth-child(1) > th:last-child {
    border-radius: 0 0.5rem 0 0;
  }

  th {
    text-align: left;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
  }

  th + th {
    border-left: 1px solid ${({ theme }) => theme.colors.light};
  }

  td + td {
    border-left: 1px solid ${({ theme }) => theme.colors.grey};
  }

  td {
    text-align: left;
    padding: 0.5rem;
  }

  tr + tr {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledPagination = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  .pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .actions {
    > div svg {
      cursor: pointer;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .disabled {
    > svg {
      color: ${({ theme }) => theme.colors.grey} !important;
      cursor: default !important;
    }
  }
`;
