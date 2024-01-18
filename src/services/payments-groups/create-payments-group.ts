import { api } from "..";
import { call } from "../utils";

type TCreatePaymentsGroup = {
  name: string;
};

export const createPaymentsGroup = async ({ name }: TCreatePaymentsGroup) => {
  const response = await call(async () =>
    api.post("/payments-groups", { name })
  );

  return response;
};
