import { useEffect, useState } from "react";
import { CategoryCell, Icon, Table } from "../../../components";
import {
  StyledNextMonthPayments,
  StyledNoData,
} from "./next-month-payments.styles";
import { getAllPayments } from "../../../services";
import { EStatus, TPayment } from "../../../utils";
import { formatMyCurrency, getCountRestDays } from "../../../utils/functions";

interface INextMonthPayments {
  currentYear: number;
  nextMonth: number;
  nextMonthName: string;
}

export const NextMonthPayments = ({
  currentYear,
  nextMonth,
  nextMonthName,
}: INextMonthPayments) => {
  const page = 0;
  const pageSize = 5;
  const [pays, setPays] = useState<any[][]>([]);
  const [paysCount, setPaysCount] = useState<number>(0);

  const getNextMonthPayments = async () => {
    const response = await getAllPayments({
      page,
      pageSize,
      status: EStatus.PENDING,
      startPayAt: new Date(currentYear, nextMonth, 1).toJSON().slice(0, 10),
      endPayAt: new Date(currentYear, nextMonth + 1, 0).toJSON().slice(0, 10),
    });

    if (!response) return;

    const [payments, total] = response;

    const formatedPayments = payments.map((payment: TPayment) => [
      payment.title,
      getCountRestDays(payment.pay_at),
      <CategoryCell
        icon={payment.category_icon}
        name={payment.category_name}
      />,
      formatMyCurrency(payment.value),
    ]);

    setPays(formatedPayments);
    setPaysCount(total);
  };

  const columnsNames = ["Título", "Prazo", "Categoria", "Valor"];

  useEffect(() => {
    getNextMonthPayments();
  }, []);

  return (
    <StyledNextMonthPayments>
      <h2>
        <Icon name="payday" color="primary" />
        Próximo mês - {nextMonthName}
      </h2>
      {pays.length !== 0 && (
        <Table
          columnsNames={columnsNames}
          data={pays}
          page={page}
          pageSize={pageSize}
          total={paysCount}
          hidePagination
        />
      )}
      {pays.length === 0 && (
        <StyledNoData>
          <p>Não há pagamentos pendentes para o próximo mês.</p>
        </StyledNoData>
      )}
    </StyledNextMonthPayments>
  );
};
