import { Link } from "react-router-dom";
import { StyledMenu } from "./menu.styles";
import { MdHome } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/">
            <MdHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/new-payment">
            <FaCirclePlus /> Novo gasto
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <BiSolidCategoryAlt /> Categorias
          </Link>
        </li>
        <li>
          <Link to="/sign">
            <FaSignInAlt /> Logar
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};
