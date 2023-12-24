import { Dispatch, SetStateAction } from "react";
import { StyledPagination, StyledTable } from "./table.styles";
import { IoIosArrowDropleftCircle as ArrowLeft } from "react-icons/io";
import { IoIosArrowDroprightCircle as ArrowRight } from "react-icons/io";
interface ITable {
  columnsNames: string[];
  data: any[][];
  total: number;
  pageSize: number;
  page: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Table = ({
  columnsNames = [],
  data = [[], []],
  page,
  setPage,
  pageSize,
  setPageSize,
  total,
}: ITable) => {
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
          <p>por página.</p>
        </div>
        <div className="pagination actions">
          <div
            className={page === 0 ? "disabled" : ""}
            onClick={onPreviousPage}
          >
            <ArrowLeft />
          </div>
          <div
            className={pageSize * (page + 1) >= total ? "disabled" : ""}
            onClick={onNextPage}
          >
            <ArrowRight />
          </div>
        </div>
      </StyledPagination>
    </>
  );
};
