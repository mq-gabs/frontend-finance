import { StyledLogoAndName } from "./logo-and-name.styles";
import logo from "../../assets/img/logo.svg";
import logoName from "../../assets/img/logo-name.svg";

export const LogoAndName = () => {
  return (
    <StyledLogoAndName>
      <img className="logo" src={logo} alt="Logo" />
      <img className="logo-name" src={logoName} alt="Name" />
    </StyledLogoAndName>
  );
};
