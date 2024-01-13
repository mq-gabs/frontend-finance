import { api } from "..";
import { EStatus } from "../../utils";
import { call } from "../utils";

type TUpdatePayment = {
  id: string;
  name?: string;
  status?: EStatus;
};

export const updatePayment = async ({ id, name, status }: TUpdatePayment) => {
  const response = await call(async () =>
    api.patch(`/payments/${id}`, {
      name,
      status,
    })
  );

  return response;
};
