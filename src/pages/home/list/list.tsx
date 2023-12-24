import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Table } from "../../../components";
import { StyledList } from "./list.styles";
import {
  formatDate,
  formatStatus,
  formatValue,
  getFlow,
} from "../../../utils/functions";

interface IList {
  pays: any[];
  paysCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
}

export const List = ({
  pays,
  paysCount,
  page,
  setPage,
  pageSize,
  setPageSize,
}: IList) => {
  const [data, setData] = useState<any[][]>([[]]);

  const columnsNames = [
    "Pagamento",
    "Título",
    "Categoria",
    "Fluxo",
    "Valor",
    "Status",
    "Ações",
  ];

  const Actions = () => <>act</>;

  useEffect(() => {
    const formatedPays = pays.map((pay: any) => [
      formatDate(pay.pay_at),
      pay.title,
      pay.category_id.slice(0, 5),
      getFlow(pay.flow),
      formatValue(pay.value),
      formatStatus(pay.status),
      <Actions />,
    ]);
    setData(formatedPays);
  }, [pays]);

  return (
    <StyledList>
      <h2>Pagamentos realizados</h2>
      <Table
        columnsNames={columnsNames}
        data={data}
        total={paysCount}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </StyledList>
  );
};
