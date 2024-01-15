import { api } from "..";
import { call } from "../utils";

type TGetPaymentsBalance = {
  dateRef: string;
};

export const getPaymentsBalance = async ({ dateRef }: TGetPaymentsBalance) => {
  const response = await call(async () =>
    api.get(`/payments/balance?dateRef=${dateRef}`)
  );

  return response;
};
