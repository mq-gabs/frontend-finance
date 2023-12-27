import { api } from "..";
import { call } from "../utils";

type TEditCategory = {
  id: string;
  name: string;
  color: string;
};

export const editCategory = async ({ id, name, color }: TEditCategory) => {
  const response = await call(
    async () => await api.patch(`/categories/${id}`, { name, color })
  );

  return response;
};
