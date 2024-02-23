import { api } from "..";
import { EStatus } from "../../utils";
import { call } from "../utils";

type TUpdatePayment = {
  id: string;
  title?: string;
  status?: EStatus;
  category_id?: string;
  value?: number;
  pay_at?: string;
};

export const updatePayment = async ({
  id,
  title,
  status,
  category_id,
  value,
  pay_at,
}: TUpdatePayment) => {
  const response = await call(async () =>
    api.patch(`/payments/${id}`, {
      title,
      status,
      category_id,
      value,
      pay_at,
    })
  );

  return response;
};
