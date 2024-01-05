import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon, Table } from "../../../components";
import { StyledCategoryCell, StyledList } from "./list.styles";

import { TIcon } from "../../../utils";
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
    "Pagar em",
    "Título",
    "Categoria",
    "Fluxo",
    "Valor",
    "Status",
    "Ações",
  ];

  const Actions = () => <>act</>;

  const Category = ({ name, icon }: { name: string; icon: TIcon }) => (
    <StyledCategoryCell>
      <Icon name={icon} />
      <p>{name}</p>
    </StyledCategoryCell>
  );

  useEffect(() => {
    const formatedPays = pays.map((pay: any) => [
      formatDate(pay.pay_at),
      pay.title,
      <Category name={pay.category_name} icon={pay.category_icon} />,
      getFlow(pay.flow),
      formatValue(pay.value),
      formatStatus(pay.status),
      <Actions />,
    ]);
    setData(formatedPays);
  }, [pays]);

  return (
    <StyledList>
      <h2>Pagamentos</h2>
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
