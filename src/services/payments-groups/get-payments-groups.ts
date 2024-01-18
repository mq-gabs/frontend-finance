import { api } from "..";
import { call } from "../utils";

type TGetPaymentsGroups = {
  page?: number;
  pageSize?: number;
};

export const getPaymentsGroups = async ({
  page = 0,
  pageSize = 10,
}: TGetPaymentsGroups) => {
  const query = `?page=${page}&pageSize=${pageSize}`;

  const response = await call(
    async () => await api.get(`/payments-groups${query}`)
  );

  return response;
};
