import { api } from "..";
import { call } from "../utils";

type TUpdatePaymentsGroup = {
  name?: string;
  paymentsIds?: string[];
  id: string;
};

export const updatePaymetsGroup = async ({
  name,
  paymentsIds,
  id,
}: TUpdatePaymentsGroup) => {
  const response = await call(
    async () =>
      await api.patch(`/payments-groups/${id}`, {
        name,
        paymentsIds,
      })
  );

  return response;
};
