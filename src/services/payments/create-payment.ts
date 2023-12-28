import { api } from "..";
import { EFlow, EPaymentType } from "../../utils";
import { call } from "../utils";

type TCreatePayment = {
  title: string;
  pay_at: string;
  category_id: string;
  value: number;
  total: number;
  payment_type: EPaymentType;
  flow: EFlow;
};

export const createPayment = async ({
  title,
  category_id,
  flow,
  pay_at,
  payment_type,
  value,
  total,
}: TCreatePayment) => {
  const response = await call(
    async () =>
      await api.post("/payments", {
        title,
        category_id,
        flow,
        pay_at,
        payment_type,
        value,
        total,
      })
  );

  return response;
};
