import { ReactNode } from "react";
import { IconButton } from "..";
import {
  StyledDialogBG,
  StyledDialogContent,
  StyledDialogTop,
  StyledDialogWindow,
  StyledDialogWrapper,
} from "./dialog.styles";

interface IDialog {
  title: string;
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Dialog = ({
  title = "Título",
  open = true,
  onClose = () => {},
  children,
}: IDialog) => {
  return (
    <>
      {open && (
        <StyledDialogWrapper>
          <StyledDialogBG onClick={onClose} />
          <StyledDialogWindow>
            <StyledDialogTop>
              <p>{title}</p>
              <IconButton
                icon="cross"
                onClick={onClose}
                color="light"
                size={0.8}
              />
            </StyledDialogTop>
            <StyledDialogContent>{children}</StyledDialogContent>
          </StyledDialogWindow>
        </StyledDialogWrapper>
      )}
    </>
  );
};
