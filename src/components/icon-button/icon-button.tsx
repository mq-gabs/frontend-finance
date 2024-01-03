import { StyledIconButton } from "./icon-button.styles";
import { TColors, TIcon } from "../../utils";
import { Icon } from "..";

interface IIconButton {
  onClick: () => void;
  icon: TIcon;
  color?: TColors;
  size?: number;
}

export const IconButton = ({
  onClick = () => {},
  icon,
  color = "primary",
  size = 1,
}: IIconButton) => {
  return (
    <StyledIconButton onClick={onClick} color={color} size={size}>
      <Icon name={icon} size={size} color={color} />
    </StyledIconButton>
  );
};
