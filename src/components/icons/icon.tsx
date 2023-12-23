import { StyledIcon } from "./icon.styles";
import { Logo, LogoName } from ".";

const icons = {
  logo: Logo,
  logoName: LogoName,
};

interface IIcon {
  name: "logo" | "logoName";
}

export default function Icon({ name = "logo" }: IIcon) {
  const RIcon = icons[name];
  return (
    <StyledIcon>
      <RIcon />
    </StyledIcon>
  );
}
