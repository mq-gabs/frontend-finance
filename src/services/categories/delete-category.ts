import { api } from "..";
import { call } from "../utils";

type TDeleteCategory = {
  id: string;
};

export const deleteCategory = async ({ id }: TDeleteCategory) => {
  const response = await call(async () => api.delete(`/categories/${id}`));

  return response;
};
