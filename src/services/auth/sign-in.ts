import { api } from "..";
import { call } from "../utils";

type TSignIn = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: TSignIn) => {
  const response = await call(
    async () => await api.post("/session", { email, password })
  );

  return response;
};
