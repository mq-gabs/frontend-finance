import { api } from "..";
import { call } from "../utils";

type TGetTopCategories = {
  qtd?: number;
  startDate: string;
  endDate: string;
};

export const getTopCategories = async ({
  startDate = "",
  endDate = "",
  qtd = 5,
}: TGetTopCategories) => {
  const query = `?startDate${startDate ? `=${startDate}` : ""}&endDate${
    endDate ? `=${endDate}` : ""
  }`;

  const response = await call(async () =>
    api.get(`/categories/top/${qtd}${query}`)
  );

  return response;
};
