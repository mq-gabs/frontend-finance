import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Sign } from "../pages";
import { Menu } from "../components";

export const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 120px)",
          left: "120px",
          height: "100vh",
          top: "0",
        }}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sign" Component={Sign} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
