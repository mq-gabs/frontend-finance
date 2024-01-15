import { useEffect, useState } from "react";
import { Actions, CategoryCell, Icon, Table } from "../../../components";
import { StyledList, StyledNoContent } from "./list-month-payments.styles";

import { EStatus, TPayment } from "../../../utils";
import {
  formatMyCurrency,
  getFlow,
  getCountRestDays,
  getStatusInfo,
} from "../../../utils/functions";
import { getAllPayments } from "../../../services";

interface IListMonthPayments {
  month: number;
  year: number;
}

export const ListMonthPayments = ({ month, year }: IListMonthPayments) => {
  const [paysTotal, setPaysTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const [pays, setPays] = useState<any[][]>([]);

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
      <CategoryCell name={pay.category_name} icon={pay.category_icon} />,
      getFlow(pay.flow),
      formatMyCurrency(pay.value),
      <Actions
        id={pay.id}
        needToPay={pay.status !== EStatus.PAID}
        onReload={getPayments}
      />,
    ]);

    setPays(formatedPays);
    setPaysTotal(total);
  };

  const columnsNames = [
    "Título",
    "Prazo",
    "Categoria",
    "Fluxo",
    "Valor",
    "Ações",
  ];

  useEffect(() => {
    getPayments();
  }, [page, pageSize]);

  console.log({ pays });

  return (
    <StyledList>
      <h1>
        <Icon
          name={getStatusInfo(EStatus.PENDING).icon}
          color={getStatusInfo(EStatus.PENDING).color}
        />{" "}
        Pagamentos pendentes
      </h1>
      {pays.length !== 0 && (
        <Table
          columnsNames={columnsNames}
          data={pays}
          total={paysTotal}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          hidePagination
        />
      )}
      {pays.length === 0 && (
        <StyledNoContent>Nenhum pagamento está pendente.</StyledNoContent>
      )}
    </StyledList>
  );
};
