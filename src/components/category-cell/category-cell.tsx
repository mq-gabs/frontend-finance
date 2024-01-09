import { Icon } from "..";
import { TIcon } from "../../utils";
import { StyledCategoryCell } from "./category-cell.styles";

interface ICategoryCell {
  name: string;
  icon: TIcon;
}

export const CategoryCell = ({ name, icon }: ICategoryCell) => {
  return (
    <StyledCategoryCell>
      <Icon name={icon} />
      <p>{name}</p>
    </StyledCategoryCell>
  );
};
