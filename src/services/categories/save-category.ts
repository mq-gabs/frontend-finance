import { api } from "..";
import { call } from "../utils";

type TSaveCategory = {
  name: string;
  color: string;
};

export const saveCategory = async ({ name, color }: TSaveCategory) => {
  const response = await call(
    async () => await api.post("/categories", { name, color })
  );

  return response;
};
