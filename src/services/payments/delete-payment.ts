import { api } from "..";
import { call } from "../utils";

export const deletePayment = async ({ id }: { id: string }) => {
  const response = await call(async () => api.delete(`/payments/${id}`));

  return response;
};
