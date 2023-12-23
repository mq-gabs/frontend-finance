import { StyledTable } from "./table.styles";
import { FC } from "react";

interface ITable {
  columnsNames: string[];
  data: any[][];
}

export const Table: FC<ITable> = ({ columnsNames = [], data = [[], []] }) => {
  return (
    <StyledTable size={columnsNames.length}>
      <tr>
        {columnsNames.map((name) => (
          <th key={name}>{name}</th>
        ))}
      </tr>
      {data.map((row) => (
        <tr key={String(Math.random() * 1e6)}>
          {row.map((cell) => (
            <td key={cell}>{cell}</td>
          ))}
        </tr>
      ))}
    </StyledTable>
  );
};
