import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon, Table } from "../../../components";
import { StyledFormatedCell, StyledList } from "./list.styles";

import { EStatus, TIcon, TPayment } from "../../../utils";
import {
  formatDate,
  formatStatus,
  formatStatusIcon,
  formatTotal,
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
    "Pagamento em",
    "Título",
    "Categoria",
    "Fluxo",
    "Total",
    "Status",
    "Ações",
  ];

  const Actions = () => <>act</>;

  const Category = ({ name, icon }: { name: string; icon: TIcon }) => (
    <StyledFormatedCell>
      <Icon name={icon} />
      <p>{name}</p>
    </StyledFormatedCell>
  );

  const Status = ({ name }: { name: EStatus }) => {
    const statusIconInfo = formatStatusIcon(name);

    return (
      <StyledFormatedCell>
        <Icon name={statusIconInfo.name} color={statusIconInfo.color} />
        <p>{formatStatus(name)}</p>
      </StyledFormatedCell>
    );
  };

  useEffect(() => {
    const formatedPays = pays.map((pay: TPayment) => [
      formatDate(pay.pay_at),
      pay.title,
      <Category name={pay.category_name} icon={pay.category_icon} />,
      getFlow(pay.flow),
      formatTotal(pay.value),
      <Status name={pay.status} />,
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
