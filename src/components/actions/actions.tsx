import { useNavigate } from "react-router-dom";
import { ConfirmationDialog, IconButton } from "..";
import { deletePayment, updatePayment } from "../../services";
import { StyledActions } from "./actions.styles";
import { EStatus } from "../../utils";
import { useState } from "react";

interface IActions {
  needToPay?: boolean;
  id: string;
}

export const Actions = ({ needToPay = true, id }: IActions) => {
  const [openPayDialog, setOpenPayDialog] = useState<boolean>(false);
  const [openDeleteDilaog, setOpenDeleteDialog] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickPay = () => {
    setOpenPayDialog(true);
  };

  const handlePay = async () => {
    await updatePayment({
      id,
      status: EStatus.PAID,
    });

    setOpenPayDialog(false);
    navigate(0);
  };

  const handleClickEdit = () => {
    navigate(`/pagamentos/editar/${id}`);
  };

  const handleClickDelete = () => {
    setOpenDeleteDialog(true);
  };

  const handleDelete = async () => {
    await deletePayment({ id });

    setOpenDeleteDialog(false);
    navigate(0);
  };

  return (
    <StyledActions>
      {needToPay && (
        <IconButton
          icon="pay"
          color="primary"
          onClick={handleClickPay}
          size={0.8}
        />
      )}
      <IconButton
        icon="edit"
        color="primary"
        onClick={handleClickEdit}
        size={0.8}
      />
      <IconButton
        icon="delete"
        color="primary"
        onClick={handleClickDelete}
        size={0.8}
      />
      <ConfirmationDialog
        onClose={() => setOpenPayDialog(false)}
        onConfirm={handlePay}
        open={openPayDialog}
        title="Confirmar pagamento?"
        text="Ao confirmar a ação o pagamento será marcado como pago."
      />
      <ConfirmationDialog
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleDelete}
        open={openDeleteDilaog}
        title="Confirmar exclusão?"
        text="Ao confirmar essa ação o pagamento será excluído definidamente."
      />
    </StyledActions>
  );
};
