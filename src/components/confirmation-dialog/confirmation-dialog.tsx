import { Button, Dialog } from "..";
import {
  StyledActionsWrapper,
  StyledConfirmationDialog,
} from "./confirmation-dialog.styles";

interface IConfirmationDialog {
  title: string;
  text: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmationDialog = ({
  title,
  text,
  open,
  onClose,
  onConfirm,
}: IConfirmationDialog) => {
  return (
    <Dialog onClose={onClose} open={open} title={title}>
      <StyledConfirmationDialog>
        <p>{text}</p>
        <StyledActionsWrapper>
          <Button text="Cancelar" type="secondary" onClick={onClose} />
          <Button text="Confirmar" type="primary" onClick={onConfirm} />
        </StyledActionsWrapper>
      </StyledConfirmationDialog>
    </Dialog>
  );
};
