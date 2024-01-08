import { useEffect, useState } from "react";
import { Icon, Table } from "../../../components";
import { StyledFormatedCell, StyledList } from "./list-month-payments.styles";

import { EStatus, TIcon, TPayment } from "../../../utils";
import {
  formatDate,
  formatStatus,
  formatStatusIcon,
  formatMyCurrency,
  getFlow,
  getCountRestDays,
} from "../../../utils/functions";
import { getAllPayments } from "../../../services";

interface IListMonthPayments {
  month: number;
  year: number;
}

export const ListMonthPayments = ({ month, year }: IListMonthPayments) => {
  const [paysTotal, setPaysTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [data, setData] = useState<any[][]>([[]]);

  const getPayments = async () => {
    const payments = await getAllPayments({
      page,
      pageSize,
      startPayAt: new Date(year, month, 1).toJSON().slice(0, 10),
      endPayAt: new Date(year, month + 1, 0).toJSON().slice(0, 10),
      status: EStatus.PENDING,
    });

    const [pays, total] = payments;

    const formatedPays = pays.map((pay: TPayment) => [
      pay.title,
      getCountRestDays(pay.pay_at),
      <Category name={pay.category_name} icon={pay.category_icon} />,
      getFlow(pay.flow),
      formatMyCurrency(pay.value),
      <Actions />,
    ]);

    setData(formatedPays);
    setPaysTotal(total);
  };

  const columnsNames = [
    "Título",
    "Data",
    "Categoria",
    "Fluxo",
    "Valor",
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
    getPayments();
  }, [page, pageSize]);

  return (
    <StyledList>
      <h2>Pagamentos pendentes</h2>
      <Table
        columnsNames={columnsNames}
        data={data}
        total={paysTotal}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </StyledList>
  );
};
