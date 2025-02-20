import { Route, Routes } from "react-router-dom";
import {
  Categories,
  EditPayment,
  EditPaymentsGroup,
  Home,
  NewPayments,
  Notes,
  Payments,
  PaymentsGroups,
  ViewPaymentsGroup,
} from "../pages";
import { Menu } from "../components";
import light from "../assets/theme/light";

export const AuthRouter = () => {
  return (
    <>
      <Menu />
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 120px)",
          left: "120px",
          height: "100vh",
          top: "0",
          overflowY: "auto",
          padding: "1rem",
          background: light.colors.light,
        }}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/categorias" Component={Categories} />
          <Route path="/pagamentos" Component={Payments} />
          <Route path="/pagamentos/novo" Component={NewPayments} />
          <Route path="/pagamentos/editar/:id" Component={EditPayment} />
          <Route path="/grupos" Component={PaymentsGroups} />
          <Route path="/grupos/:id" Component={ViewPaymentsGroup} />
          <Route path="/grupos/editar/:id" Component={EditPaymentsGroup} />
          <Route path="/notes" Component={Notes} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
    </>
  );
};
