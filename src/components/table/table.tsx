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
          <th>{name}</th>
        ))}
      </tr>
      {data.map((row) => (
        <tr>
          {row.map((cell) => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </StyledTable>
  );
};
