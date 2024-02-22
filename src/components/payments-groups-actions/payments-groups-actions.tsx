import { useState } from "react";
import { ConfirmationDialog, IconButton } from "..";
import { StyledPaymentsGroupsActions } from "./payments-groups-actions.styles";
import { useNavigate } from "react-router-dom";
import { deletePaymentsGroup } from "../../services";

interface IPaymentsGroupsActions {
  id: string;
  onReload: () => void;
}

export const PaymentsGroupsActions = ({
  id,
  onReload,
}: IPaymentsGroupsActions) => {
  const [
    openConfirmToDeletePaymentsGroup,
    setOpenConfirmToDeletePaymentsGroup,
  ] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGoToEdit = () => {
    navigate(`/grupos/editar/${id}`);
  };

  const handleClickToDelete = () => {
    setOpenConfirmToDeletePaymentsGroup(true);
  };

  const handleDeletePaymentGroup = async () => {
    await deletePaymentsGroup({ id });
    onReload();
  };

  const handleClickToViewPaymentsGroup = () => {
    navigate(`/grupos/${id}`);
  };

  return (
    <StyledPaymentsGroupsActions>
      <IconButton
        onClick={handleClickToViewPaymentsGroup}
        icon="eye"
        size={0.8}
      />
      <IconButton onClick={handleGoToEdit} icon="edit" size={0.8} />
      <IconButton onClick={handleClickToDelete} icon="delete" size={0.8} />
      <ConfirmationDialog
        open={openConfirmToDeletePaymentsGroup}
        onConfirm={handleDeletePaymentGroup}
        onClose={() => setOpenConfirmToDeletePaymentsGroup(false)}
        title="Excluir grupo de pagamento?"
        text="Ao confirmar esta ação o grupo será excluído."
      />
    </StyledPaymentsGroupsActions>
  );
};
