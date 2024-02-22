import { useEffect, useState } from "react";
import { StyledViewPaymentsGroup } from "./view-payments-group.styles";
import { EPaymentType, TPayment } from "../../utils";
import {
  PaymentsFilter,
  TFilterData,
} from "../payments/payments-filter/payments-filter";
import { CategoryCell, StatusCell, Table } from "../../components";
import { useParams } from "react-router-dom";
import { getPaymentsOfGroup } from "../../services";
import {
  formatDate,
  formatMyCurrency,
  formatPaymentType,
  getFlow,
} from "../../utils/functions";

export const ViewPaymentsGroup = () => {
  const { id } = useParams<{ id: string }>();

  const [paymentsGroupName, setPaymentGroupName] = useState<string>("");
  const [filterData, setFilterData] = useState<TFilterData>({} as TFilterData);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [formattedPays, setFormattedPays] = useState<any[][]>([]);
  const [total, setTotal] = useState<number>(0);

  const columnsNames = [
    "Título",
    "Pagamento em",
    "Categoria",
    "Fluxo",
    "Tipo",
    "Parcela",
    "Valor",
    "Status",
    "Ações",
  ];

  const listGroupPayments = async () => {
    if (!id) return;

    const response = await getPaymentsOfGroup({
      id,
      title: filterData.title,
      endPayAt: filterData.endPayAt,
      startPayAt: filterData.startPayAt,
      flow: filterData.flow,
      page,
      pageSize,
      paymentType: filterData.paymentType,
      status: filterData.status,
    });

    if (!response) return;

    const payments = response.payments;

    const formattedPayments = payments.map((payment: TPayment) => [
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
      () => <></>,
    ]);

    setPaymentGroupName(response.name);
    setFormattedPays(formattedPayments);
    setTotal(response.paymentsCount);
  };

  useEffect(() => {
    listGroupPayments();
  }, [page, pageSize, filterData]);

  return (
    <StyledViewPaymentsGroup>
      <h2>
        Grupo de pagamento
        {paymentsGroupName && ` - ${paymentsGroupName}`}
      </h2>
      <PaymentsFilter data={filterData} setData={setFilterData} />
      <Table
        columnsNames={columnsNames}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        data={formattedPays}
        total={total}
      />
    </StyledViewPaymentsGroup>
  );
};
