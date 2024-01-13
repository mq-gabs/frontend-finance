import { useEffect, useState } from "react";
import { Actions, CategoryCell, StatusCell, Table } from "../../components";
import { StyledNoContent, StyledPayments } from "./payments.styles";
import { getAllPayments } from "../../services";
import { EFlow, EPaymentType, EStatus, TPayment } from "../../utils";
import {
  formatDate,
  formatMyCurrency,
  formatPaymentType,
  getFlow,
} from "../../utils/functions";
import { PaymentsFilter } from "./payments-filter/payments-filter";

export type TFilterData = {
  title: string;
  status: EStatus;
  paymentType: EPaymentType;
  flow: EFlow;
  startPayAt: string;
  endPayAt: string;
};

export const Payments = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pays, setPays] = useState<any[][]>([]);
  const [paysCount, setPaysCount] = useState<number>(0);

  const [filterData, setFilterData] = useState<TFilterData>({} as TFilterData);

  const getPayments = async () => {
    const response = await getAllPayments({
      page,
      pageSize,
      ...filterData,
    });

    if (!response) return;

    const [payments, total] = response;

    const formatedPayments = payments.map((payment: TPayment) => [
      payment.title,
      formatDate(payment.pay_at),
      <CategoryCell
        icon={payment.category_icon}
        name={payment.category_name}
      />,
      getFlow(payment.flow),
      formatPaymentType(payment.payment_type),
      payment.payment_type === EPaymentType.INSTALLMENT
        ? `${Number(payment.installment_count) + 1}/${
            payment.installment_total
          }`
        : "-",
      formatMyCurrency(payment.value),
      <StatusCell status={payment.status} />,
      <Actions needToPay={payment.status !== EStatus.PAID} id={payment.id} />,
    ]);

    setPays(formatedPayments);
    setPaysCount(total);
  };

  useEffect(() => {
    getPayments();
  }, [page, pageSize, filterData]);

  const columnsNames = [
    "Título",
    "Pagamento em",
    "Categoria",
    "Fluxo",
    "Tipo",
    "Parcela",
    "Valor",
    "Status",
    "Acões",
  ];

  return (
    <StyledPayments>
      <h1>Pagamentos</h1>
      <PaymentsFilter data={filterData} setData={setFilterData} />
      {pays.length !== 0 && (
        <Table
          page={page}
          pageSize={pageSize}
          columnsNames={columnsNames}
          data={pays}
          total={paysCount}
          setPage={setPage}
          setPageSize={setPageSize}
        />
      )}
      {pays.length === 0 && (
        <StyledNoContent>
          <p>Nenhum dado para exibir</p>
        </StyledNoContent>
      )}
    </StyledPayments>
  );
};
