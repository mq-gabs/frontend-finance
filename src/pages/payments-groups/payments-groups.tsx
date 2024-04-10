import { useEffect, useState } from "react";
import {
  StyledCurrency,
  StyledEmpty,
  StyledFormWrapper,
  StyledPaymentsGroups,
  StyledPaymentsGroupsContent,
  StyledTableWrapper,
} from "./payments-groups.styles";
import { Button, Input, Loading, Table } from "../../components";
import { createPaymentsGroup, getPaymentsGroups } from "../../services";
import { TPaymentsGroup } from "../../utils";
import { PaymentsGroupsActions } from "../../components/payments-groups-actions/payments-groups-actions";
import { formatMyCurrency } from "../../utils/functions";

export const PaymentsGroups = () => {
  const [paysGroups, setPaysGroups] = useState<any[][]>([]);
  const [groupsCount, setGroupsCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [paymentsGroupName, setPaymentsGroupName] = useState<string>("");

  const getGroups = async () => {
    setIsLoading(true);

    const response = await getPaymentsGroups({ page, pageSize });

    setIsLoading(false);

    if (!response) return;

    const [groups, total] = response;

    const formatedGroups = groups.map((group: TPaymentsGroup) => [
      group.name.toUpperCase(),
      group.payments_count,
      <StyledCurrency negative={group.payments_balance < 0}>
      {formatMyCurrency(group?.payments_balance)}
      </StyledCurrency>,
      <PaymentsGroupsActions id={group.id} onReload={getGroups} />,
    ]);

    setPaysGroups(formatedGroups);
    setGroupsCount(total);
  };

  const handleAddPaymentsGroup = async (e: any) => {
    e.preventDefault();

    setIsCreating(true);

    const response = await createPaymentsGroup({ name: paymentsGroupName });

    setIsCreating(false);

    if (!response) return;

    setPaymentsGroupName("");
    getGroups();
  };

  useEffect(() => {
    getGroups();
  }, [page, pageSize]);

  const columnsNames = ["Nome", "Nº de pagamentos", "Saldo", "Ações"];

  return (
    <StyledPaymentsGroups>
      <h2>Grupos de pagamentos</h2>
      <StyledPaymentsGroupsContent>
        <StyledFormWrapper>
          <form>
            <Input
              name="Nome"
              placeholder="Nome"
              setValue={setPaymentsGroupName}
              value={paymentsGroupName}
              type="text"
            />
            <Button text="Adicionar" onClick={handleAddPaymentsGroup} isLoading={isCreating} />
          </form>
        </StyledFormWrapper>
        <StyledTableWrapper>
          {paysGroups.length !== 0 && !(isLoading || isCreating) && (
            <Table
              page={page}
              pageSize={pageSize}
              setPage={setPage}
              setPageSize={setPageSize}
              columnsNames={columnsNames}
              total={groupsCount}
              data={paysGroups}
            />
          )}
          {paysGroups.length === 0 && !(isLoading || isCreating) && (
            <StyledEmpty>
              <p>Nenhum grupo de pagamento encontrado</p>
            </StyledEmpty>
          )}
          {(isLoading || isCreating) && (
            <Loading color="primary" />
          )}
       </StyledTableWrapper>
      </StyledPaymentsGroupsContent>
    </StyledPaymentsGroups>
  );
};
