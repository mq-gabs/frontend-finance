import { api } from "..";
import { EFlow, EStatus } from "../../utils";
import { call } from "../utils";

type TGetTopCategories = {
  qtd?: number;
  startDate: string;
  endDate: string;
  flow: EFlow;
  status: EStatus;
};

export const getTopCategories = async ({
  startDate = "",
  endDate = "",
  flow,
  status,
  qtd = 5,
}: TGetTopCategories) => {
  const query = `?startDate${startDate ? `=${startDate}` : ""}&endDate${
    endDate ? `=${endDate}` : ""
  }&flow${flow ? `=${flow}` : ""}&status${status ? `=${status}` : ""}`;

  const response = await call(async () =>
    api.get(`/categories/top/${qtd}${query}`)
  );

  return response;
};
