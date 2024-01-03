import { Route, Routes } from "react-router-dom";
import { Categories, Home, NewPayments } from "../pages";
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
          <Route path="/pagamentos/novo" Component={NewPayments} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
    </>
  );
};
