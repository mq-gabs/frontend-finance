import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks";
import { AuthRouter } from "./auth.router";
import { OpenRouter } from "./open.router";

export const Router = () => {
  const {
    user: { token },
  } = useAuth();

  return (
    <BrowserRouter>{token ? <AuthRouter /> : <OpenRouter />}</BrowserRouter>
  );
};
