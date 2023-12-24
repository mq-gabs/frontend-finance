import { Link } from "react-router-dom";
import { StyledMenu } from "./menu.styles";
import { FaCirclePlus } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../hooks";
import { MdSpaceDashboard } from "react-icons/md";

export const Menu = () => {
  const { logOut } = useAuth();

  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/">
            <MdSpaceDashboard /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/payments/new">
            <FaCirclePlus /> Novo gasto
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <BiSolidCategoryAlt /> Categorias
          </Link>
        </li>
        <li>
          <div onClick={logOut}>
            <a href="/s">
              <FaSignOutAlt /> Sair
            </a>
          </div>
        </li>
      </ul>
    </StyledMenu>
  );
};
