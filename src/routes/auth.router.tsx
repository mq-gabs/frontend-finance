import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
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
        }}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="*" Component={Home} />
        </Routes>
      </div>
    </>
  );
};
