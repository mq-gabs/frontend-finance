import { Dialog, Icon, IconButton, icons } from "..";
import {
  StyledCategorySelect,
  StyledCategorySelectActions,
  StyledCategorySelectContent,
  StyledIconsDialogWrapper,
} from "./category-select.styles";
import { TIcon } from "../../utils";
import { useState } from "react";

interface ICategorySelect {
  icon: TIcon | "";
  changeIcon: (a: any) => void;
}

export const CategorySelect = ({ icon, changeIcon }: ICategorySelect) => {
  const [openIconsDialog, setOpenIconsDialog] = useState<boolean>(false);

  const handleOpenIconsDialog = (e: any) => {
    e.preventDefault();
    setOpenIconsDialog(true);
  };

  const handleChooseIcon = (icon: TIcon) => {
    changeIcon(icon);
    setOpenIconsDialog(false);
  };

  return (
    <StyledCategorySelect>
      <StyledCategorySelectContent>
        {icon ? (
          <>
            <p>Ícone selecionado:</p>
            <div className="icon-wrap">
              <Icon name={icon} size={3} />
            </div>
          </>
        ) : (
          <span>Selecione um ícone</span>
        )}
      </StyledCategorySelectContent>
      <StyledCategorySelectActions>
        <IconButton icon="search" onClick={handleOpenIconsDialog} />
      </StyledCategorySelectActions>
      <Dialog
        title="Selecione o ícone da categoria"
        open={openIconsDialog}
        onClose={() => setOpenIconsDialog(false)}
      >
        <StyledIconsDialogWrapper>
          {Object.keys(icons).map((key) => (
            <div
              className="icon-of-dialog"
              onClick={() => handleChooseIcon(key as TIcon)}
            >
              <Icon name={key as TIcon} size={1.5} />
            </div>
          ))}
        </StyledIconsDialogWrapper>
      </Dialog>
    </StyledCategorySelect>
  );
};
