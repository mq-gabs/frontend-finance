import { api } from "..";
import { call } from "../utils";

type TCreateUserDefault = {
  name: string;
  email: string;
  password: string;
};

export const createUserDefault = async ({
  name,
  email,
  password,
}: TCreateUserDefault) => {
  const response = await call(async () =>
    api.post("/users", {
      name,
      email,
      password,
    })
  );

  return response;
};
