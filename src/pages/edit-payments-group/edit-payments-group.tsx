import { useEffect, useState } from "react";
import {
  Button,
  CategoryCell,
  Icon,
  IconButton,
  Input,
  Table,
} from "../../components";
import {
  StyledAction,
  StyledEditPaymentsGroup,
  StyledEditPaymentsGroupContent,
  StyledEmpty,
  StyledPaymentsGroupPayments,
  StyledPaymentsList,
  StyledTopOptions,
} from "./edit-payments-group.styles";
import { TPayment } from "../../utils";
import {
  getAllPayments,
  getPaymentsOfGroup,
  updatePaymetsGroup,
} from "../../services";
import { formatPaymentType, getFlow } from "../../utils/functions";
import { useNavigate, useParams } from "react-router-dom";

export const EditPaymentsGroup = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [allPaymentsList, setAllPaymentsList] = useState<any[][]>([]);
  const [allPaymentsCount, setAllPaymentsCount] = useState<number>(0);
  const [paymentsOfPaymentsGroup, setPaymentsOfPaymentsGroup] = useState<
    TPayment[]
  >([]);
  const [groupName, setGroupName] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  const columnsNames = ["Título", "Fluxo", "Tipo", "Adicionar"];
  const groupPaymentsColumnsNames = ["Título", "Fluxo", "Tipo", "Remover"];

  const handleAddPaymentToGroupList = (payment: TPayment) => {
    if (
      !paymentsOfPaymentsGroup.some(
        (_payment: TPayment) => _payment.id === payment.id
      )
    ) {
      setPaymentsOfPaymentsGroup((prev) => [...prev, payment]);
    }
  };

  const handleRemovePaymentOfGroupList = (payment: TPayment) => {
    const _paymentsOfGroup = [...paymentsOfPaymentsGroup];
    const newPaymentsOfPaymentsGroup = _paymentsOfGroup.filter(
      (_payment: TPayment) => _payment.id !== payment.id
    );

    setPaymentsOfPaymentsGroup(newPaymentsOfPaymentsGroup);
  };

  const isPaymentAdded = (payment: TPayment): boolean => {
    return paymentsOfPaymentsGroup.some(
      (_payment: TPayment) => _payment.id === payment.id
    );
  };

  const Action = ({ payment }: { payment: TPayment }) => (
    <StyledAction>
      {isPaymentAdded(payment) ? (
        <>
          <Icon name="ok" color="green" />
          <p>Adicionado</p>
        </>
      ) : (
        <IconButton
          icon="throwRight"
          color="green"
          size={0.8}
          onClick={() => handleAddPaymentToGroupList(payment)}
        />
      )}
    </StyledAction>
  );

  const getPaymentsList = async () => {
    const response = await getAllPayments({
      page,
      pageSize,
    });

    if (!response) return;

    const [payments, total] = response;

    const formatedPayments = payments.map((payment: TPayment) => [
      payment.title,
      // <CategoryCell
      //   icon={payment.category_icon}
      //   name={payment.category_name}
      // />,
      getFlow(payment.flow),
      formatPaymentType(payment.payment_type),
      <Action payment={payment} />,
    ]);

    setAllPaymentsList(formatedPayments);
    setAllPaymentsCount(total);
  };

  const getGroupPayments = async () => {
    if (!id) {
      navigate("/grupos");
      return;
    }

    const response = await getPaymentsOfGroup({ id });

    if (!response) return;

    const payments = response.payments;

    setGroupName(response.name);
    setPaymentsOfPaymentsGroup(payments);
  };

  const formatAddedPayments = (payments: TPayment[]): any[][] => {
    const formatedPayments = payments.map((payment: TPayment) => [
      payment.title,
      // <CategoryCell
      //   icon={payment.category_icon}
      //   name={payment.category_name}
      // />,
      getFlow(payment.flow),
      formatPaymentType(payment.payment_type),
      <StyledAction>
        <IconButton
          icon="throwLeft"
          color="red"
          size={0.8}
          onClick={() => handleRemovePaymentOfGroupList(payment)}
        />
      </StyledAction>,
    ]);

    return formatedPayments;
  };

  useEffect(() => {
    getGroupPayments();
  }, []);

  useEffect(() => {
    getPaymentsList();
  }, [page, pageSize]);

  const handleSaveGroup = async () => {
    if (!id) return;

    const paymentsIds = paymentsOfPaymentsGroup.map((_payment) => _payment.id);

    const response = await updatePaymetsGroup({
      id,
      name: groupName,
      paymentsIds,
    });

    if (!response) return;

    navigate("/grupos");
  };

  return (
    <StyledEditPaymentsGroup>
      <h2>Editar Grupo de Pagamentos</h2>
      <StyledTopOptions>
        <Input
          name="Nome do grupo"
          placeholder="Nome"
          setValue={(value) => setGroupName(value)}
          type="text"
          value={groupName}
        />
        <Button text="Salvar" onClick={handleSaveGroup} />
      </StyledTopOptions>
      <StyledEditPaymentsGroupContent>
        <StyledPaymentsList>
          <h4>Lista de pagamentos</h4>
          {allPaymentsList.length !== 0 && (
            <Table
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
              columnsNames={columnsNames}
              data={allPaymentsList}
              total={allPaymentsCount}
            />
          )}
          {allPaymentsList.length === 0 && (
            <StyledEmpty>
              <p>Nenhum pagamento encontrado.</p>
            </StyledEmpty>
          )}
        </StyledPaymentsList>
        <StyledPaymentsGroupPayments>
          <h4>Pagamentos adicionado ao grupo</h4>
          {paymentsOfPaymentsGroup.length !== 0 && (
            <Table
              page={0}
              pageSize={100}
              setPage={() => {}}
              setPageSize={() => {}}
              columnsNames={groupPaymentsColumnsNames}
              data={formatAddedPayments(paymentsOfPaymentsGroup)}
              total={100}
              hidePagination
            />
          )}
          {paymentsOfPaymentsGroup.length === 0 && (
            <StyledEmpty>
              <p>Nenhum pagamento foi adicionado ao grupo</p>
            </StyledEmpty>
          )}
        </StyledPaymentsGroupPayments>
      </StyledEditPaymentsGroupContent>
    </StyledEditPaymentsGroup>
  );
};
