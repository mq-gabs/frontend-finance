import { useEffect, useState } from "react";
import {
  StyledEmpty,
  StyledFormWrapper,
  StyledPaymentsGroups,
  StyledPaymentsGroupsContent,
  StyledTableWrapper,
} from "./payments-groups.styles";
import { Button, Input, Table } from "../../components";
import { createPaymentsGroup, getPaymentsGroups } from "../../services";
import { TPaymentsGroup } from "../../utils";
import { PaymentsGroupsActions } from "../../components/payments-groups-actions/payments-groups-actions";

export const PaymentsGroups = () => {
  const [paysGroups, setPaysGroups] = useState<any[][]>([]);
  const [groupsCount, setGroupsCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const [paymentsGroupName, setPaymentsGroupName] = useState<string>("");

  const getGroups = async () => {
    const response = await getPaymentsGroups({ page, pageSize });

    if (!response) return;

    const [groups, total] = response;

    const formatedGroups = groups.map((group: TPaymentsGroup) => [
      group.name.toUpperCase(),
      group.payments_count,
      <PaymentsGroupsActions id={group.id} onReload={getGroups} />,
    ]);

    setPaysGroups(formatedGroups);
    setGroupsCount(total);
  };

  const handleAddPaymentsGroup = async (e: any) => {
    e.preventDefault();

    const response = await createPaymentsGroup({ name: paymentsGroupName });

    if (!response) return;

    setPaymentsGroupName("");
    getGroups();
  };

  useEffect(() => {
    getGroups();
  }, [page, pageSize]);

  const columnsNames = ["Nome", "Nº de pagamentos", "Ações"];

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
            <Button text="Adicionar" onClick={handleAddPaymentsGroup} />
          </form>
        </StyledFormWrapper>
        <StyledTableWrapper>
          {paysGroups.length !== 0 && (
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
          {paysGroups.length === 0 && (
            <StyledEmpty>
              <p>Nenhum grupo de pagamento encontrado</p>
            </StyledEmpty>
          )}
        </StyledTableWrapper>
      </StyledPaymentsGroupsContent>
    </StyledPaymentsGroups>
  );
};
