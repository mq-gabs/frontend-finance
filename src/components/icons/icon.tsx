// @ts-expect-error
import logo from "../../assets/img/logo.svg";
// @ts-expect-error
import logoName from "../../assets/img/logo-name.svg";
import { StyledIcon } from "./icon.styles";

const icons = {
  logo,
  logoName,
};

interface IIcon {
  name: "logo" | "logoName";
}

export default function Icon({ name = "logo" }: IIcon) {
  return <StyledIcon>{icons[name]}</StyledIcon>;
}
