import { api } from "..";
import { call } from "../utils";

type TGetAllCategories = {
  page?: number;
  pageSize?: number;
  name?: string;
  startDate?: string;
  endDate?: string;
};

export const getAllCategories = async ({
  page,
  pageSize,
  name,
  startDate,
  endDate,
}: TGetAllCategories) => {
  const query = `?page${page ? `=${page}` : ""}&pageSize${
    pageSize ? `=${pageSize}` : ""
  }
  &name${name ? `=${name}` : ""}
  &startDate${startDate ? `=${startDate}` : ""}
  &endDate${endDate ? `=${endDate}` : ""}`;

  const response = await call(async () => api.get(`/categories${query}`));

  return response;
};
