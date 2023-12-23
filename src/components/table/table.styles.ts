import styled from "styled-components";

export const StyledTable = styled.table<{ size: number }>`
  border: 1px solid black;
  margin: 1rem;

  tr {
    display: grid;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
    grid-template-rows: 1fr;
  }

  th {
    text-align: left;
    padding: 1rem;
  }

  th + th,
  td + td {
    border-left: 1px solid black;
  }

  td {
    text-align: left;
    padding: 1rem;
  }

  tr + tr {
    border-top: 1px solid black;
  }
`;
