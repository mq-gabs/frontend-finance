import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledPagination, StyledTable } from "./table.styles";
import { IconButton } from "..";

interface ITable {
  columnsNames: string[];
  data: any[][];
  total: number;
  pageSize: number;
  page: number;
  setPageSize?: Dispatch<SetStateAction<number>>;
  setPage?: Dispatch<SetStateAction<number>>;
  hidePagination?: boolean;
}

const genIndex = () => {
  return (Math.random() * 1e6).toLocaleString("pt-br", {
    maximumFractionDigits: 0,
    minimumIntegerDigits: 6,
  });
};

export const Table = ({
  columnsNames = [],
  data = [[], []],
  page,
  setPage = () => {},
  pageSize,
  setPageSize = () => {},
  total = 0,
  hidePagination = false,
}: ITable) => {
  const [dataToRender, setDataToRender] = useState<any[][]>([[]]);

  useEffect(() => {
    setDataToRender(data);
  }, [data])

  const onNextPage = () => {
    if (pageSize * (page + 1) >= total) return;
    setPage((prev) => prev + 1);
  };

  const onPreviousPage = () => {
    if (page === 0) return;
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <StyledTable size={columnsNames.length}>
        <tr>
          {columnsNames.map((name) => (
            <th key={genIndex()}>{name}</th>
          ))}
        </tr>
        {dataToRender.map((row) => (
          <tr key={String(Math.random() * 1e6)}>
            {row.map((cell) => (
              <td key={genIndex()}>{cell}</td>
            ))}
          </tr>
        ))}
      </StyledTable>
      {!hidePagination && (
        <StyledPagination>
          <div className="pagination options">
            <p>
              Exibindo de {page * pageSize + 1} a{" "}
              {pageSize * (page + 1) > total ? total : pageSize * (page + 1)} de
              um total de {total}.
            </p>
            <select
              onChange={({ target: { value } }) => {
                setPageSize(Number(value));
                setPage(0);
              }}
              value={pageSize}
            >
              <option>2</option>
              <option>10</option>
              <option>50</option>
              <option>100</option>
            </select>
            <p>linhas por página.</p>
          </div>
          <div className="pagination actions">
            <IconButton
              disabled={page === 0}
              icon="arrowLeft"
              onClick={onPreviousPage}
            />
            <IconButton
              disabled={pageSize * (page + 1) >= total}
              icon="arrowRight"
              onClick={onNextPage}
            />
          </div>
        </StyledPagination>
      )}
    </>
  );
};
