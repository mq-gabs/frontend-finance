import { StyledIconButton } from "./icon-button.styles";
import { TColors, TIcon } from "../../utils";
import { Icon } from "..";

interface IIconButton {
  onClick: (a: any) => void;
  icon: TIcon;
  color?: TColors;
  size?: number;
  disabled?: boolean;
}

export const IconButton = ({
  onClick = () => {},
  icon,
  color = "primary",
  size = 1,
  disabled = false,
}: IIconButton) => {
  return (
    <StyledIconButton
      onClick={disabled ? () => {} : onClick}
      size={size}
      disabled={disabled}
    >
      <Icon name={icon} size={size} color={disabled ? "grey" : color} />
    </StyledIconButton>
  );
};
