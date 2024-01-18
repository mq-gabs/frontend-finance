import { api } from "..";
import { call } from "../utils";

type TDeletePaymentsGroups = {
  id: string;
};

export const deletePaymentsGroup = async ({ id }: TDeletePaymentsGroups) => {
  const response = await call(async () => api.delete(`/payments-groups/${id}`));

  return response;
};
