import { api } from "..";
import { EFlow, EPaymentType, EStatus } from "../../utils";
import { call } from "../utils";

type TGetPaymentsOfGroup = {
  id: string;
  title?: string;
  page: number;
  pageSize: number;
  startPayAt?: string;
  endPayAt?: string;
  status?: EStatus;
  flow?: EFlow;
  paymentType?: EPaymentType;
};

export const getPaymentsOfGroup = async ({
  id,
  title,
  page,
  pageSize,
  startPayAt,
  endPayAt,
  status,
  flow,
  paymentType,
}: TGetPaymentsOfGroup) => {
  let query = "?";
  if (title) query += `title=${title}&`;
  if (page) query += `page=${page}&`;
  if (pageSize) query += `pageSize=${pageSize}&`;
  if (startPayAt) query += `startPayAt=${startPayAt}&`;
  if (endPayAt) query += `endPayAt=${endPayAt}&`;
  if (status) query += `status=${status}&`;
  if (flow) query += `flow=${flow}&`;
  if (paymentType) query += `paymentType=${paymentType}&`;

  const response = await call(async () =>
    api.get(`/payments-groups/${id}${query}`)
  );

  return response;
};
