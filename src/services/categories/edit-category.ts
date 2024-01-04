import { api } from "..";
import { call } from "../utils";

type TEditCategory = {
  id: string;
  name?: string;
  icon?: string;
};

export const editCategory = async ({ id, name, icon }: TEditCategory) => {
  const response = await call(
    async () => await api.patch(`/categories/${id}`, { name, icon })
  );

  return response;
};
