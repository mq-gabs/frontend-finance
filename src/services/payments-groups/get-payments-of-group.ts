import { api } from "..";
import { call } from "../utils";

export const getPaymentsOfGroup = async ({ id }: { id: string }) => {
  const response = await call(async () => api.get(`/payments-groups/${id}`));

  return response;
};
