import { useEffect, useState } from "react";
import { getAllPayments } from "../../../services";
import {
  StyledListLatePayments,
  StyledNoContent,
} from "./list-late-payments.styles";
import { EStatus, TPayment } from "../../../utils";
import {
  formatMyCurrency,
  getCountRestDays,
  getFlow,
  getStatusInfo,
} from "../../../utils/functions";
import { CategoryCell, Icon, Table } from "../../../components";

export const ListLatePayments = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [latePays, setLatePays] = useState<any[][]>([]);
  const [paysCount, setPaysCount] = useState<number>(0);

  const Actions = () => <>actions</>;

  const getLatePayments = async () => {
    const response = await getAllPayments({
      page,
      pageSize,
      status: EStatus.LATE,
    });

    if (!response) return;

    const [pays, total] = response;

    const formatedPays = pays.map((pay: TPayment) => [
      pay.title,
      getCountRestDays(pay.pay_at),
      <CategoryCell name={pay.category_name} icon={pay.category_icon} />,
      getFlow(pay.flow),
      formatMyCurrency(pay.value),
      <Actions />,
    ]);

    setLatePays(formatedPays);
    setPaysCount(total);
  };

  useEffect(() => {
    getLatePayments();
  }, []);

  const columnsNames = [
    "Título",
    "Atraso",
    "Categoria",
    "Fluxo",
    "Valor",
    "Ações",
  ];

  return (
    <StyledListLatePayments>
      <h1>
        <Icon
          name={getStatusInfo(EStatus.LATE).icon}
          color={getStatusInfo(EStatus.LATE).color}
        />{" "}
        Pagamentos atrasados
      </h1>
      {latePays.length !== 0 && (
        <Table
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          columnsNames={columnsNames}
          data={latePays}
          total={paysCount}
          hidePagination
        />
      )}
      {latePays.length === 0 && (
        <StyledNoContent>
          <p>
            Nenhum pagamento está atrasado. <span>Parabéns!</span>
          </p>
        </StyledNoContent>
      )}
    </StyledListLatePayments>
  );
};
