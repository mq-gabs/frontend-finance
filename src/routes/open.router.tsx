import { Route, Routes } from "react-router-dom";
import { Sign } from "../pages";

export const OpenRouter = () => {
  return (
    <Routes>
      <Route path="/sign" Component={Sign} />
      <Route path="*" Component={Sign} />
    </Routes>
  );
};
