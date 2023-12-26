import { Route, Routes } from "react-router-dom";
import { Categories, Home, NewPayments } from "../pages";
import { Menu } from "../components";

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
        }}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/categories" Component={Categories} />
          <Route path="/payments/new" Component={NewPayments} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
    </>
  );
};
