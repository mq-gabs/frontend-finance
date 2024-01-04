import { api } from "..";
import { call } from "../utils";

type TSaveCategory = {
  name: string;
  icon: string;
};

export const saveCategory = async ({ name, icon }: TSaveCategory) => {
  const response = await call(
    async () => await api.post("/categories", { name, icon })
  );

  return response;
};
