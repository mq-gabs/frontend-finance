import { api } from "..";
import { EFlow, EPaymentType, EStatus } from "../../utils";
import { call } from "../utils";

type TGetAllPayments = {
  page?: number;
  pageSize?: number;
  title?: string;
  startPayAt?: string;
  endPayAt?: string;
  categoryId?: string;
  status?: EStatus;
  paymentType?: EPaymentType;
  flow?: EFlow;
  startDate?: string;
  endDate?: string;
  startTotal?: string;
  endTotal?: string;
};

export const getAllPayments = async (data: TGetAllPayments) => {
  const query = `?page${data.page ? `=${data.page}` : ""}&pageSize${
    data.pageSize ? `=${data.pageSize}` : ""
  }&title${data.title ? `=${data.title}` : ""}&startPayAt${
    data.startPayAt ? `=${data.startPayAt}` : ""
  }&endPayAt${data.endPayAt ? `=${data.endPayAt}` : ""}&categoryId${
    data.categoryId ? `=${data.categoryId}` : ""
  }&status${data.status ? `=${data.status}` : ""}&paymentType${
    data.paymentType ? `=${data.paymentType}` : ""
  }&startDate${data.startDate ? `=${data.startDate}` : ""}&endDate${
    data.endDate ? `=${data.endDate}` : ""
  }&startTotal${data.startTotal ? `=${data.startTotal}` : ""}&endTotal${
    data.endTotal ? `=${data.endTotal}` : ""
  }&flow${data.flow ? `=${data.flow}` : ""}`;

  const response = await call(async () => await api.get(`/payments${query}`));

  return response;
};
