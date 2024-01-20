import { Route, Routes } from "react-router-dom";
import {
  Categories,
  Home,
  NewPayments,
  Payments,
  PaymentsGroups,
} from "../pages";
import { Menu } from "../components";
import light from "../assets/theme/light";
import { EditPaymentsGroup } from "../pages/edit-payments-group/edit-payments-group";

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
          <Route path="/pagamentos/editar/:id" Component={() => <></>} />
          <Route path="/grupos" Component={PaymentsGroups} />
          <Route path="/grupos/editar/:id" Component={EditPaymentsGroup} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
    </>
  );
};
