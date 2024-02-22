import { api } from "..";
import { call } from "../utils";

export const getPaymentById = async ({ id }: { id: string }) => {
  const response = await call(async () => await api.get(`/payments/${id}`));

  return response;
};
