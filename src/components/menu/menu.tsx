import { Link } from "react-router-dom";
import { StyledMenu } from "./menu.styles";
import {
  FaCirclePlus,
  FaMoneyBill1Wave,
  FaRegObjectGroup,
} from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../hooks";
import { MdSpaceDashboard, MdOutlineStickyNote2 } from "react-icons/md";

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
          <Link to="/pagamentos/novo">
            <FaCirclePlus /> Novo
          </Link>
        </li>
        <li>
          <Link to="/pagamentos">
            <FaMoneyBill1Wave /> Pagamentos
          </Link>
        </li>
        <li>
          <Link to="/grupos">
            <FaRegObjectGroup /> Grupos
          </Link>
        </li>
        <li>
          <Link to="/categorias">
            <BiSolidCategoryAlt /> Categorias
          </Link>
        </li>
        <li>
          <Link to="/notes">
            <MdOutlineStickyNote2 /> Notas
          </Link>
        </li>
        <li>
          <div onClick={logOut}>
            <a href="/">
              <FaSignOutAlt /> Sair
            </a>
          </div>
        </li>
      </ul>
    </StyledMenu>
  );
};
