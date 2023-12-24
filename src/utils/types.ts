export enum EPaymentType {
  UNIQUE = "UNIQUE",
  INSTALLMENT = "INSTALLMENT",
  RECURRENT = "RECURRENT",
}

export enum EFlow {
  IN = "IN",
  OUT = "OUT",
}

export enum EStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
  LATE = "LATE",
  PAYDAY = "PAYDAY",
}

export type TPayments = {
  id: string;
  title: string;
  category_id: string;
  pay_at: string;
  user_id: string;
  value: number;
  total: number;
  status: EStatus;
  payment_type: EPaymentType;
  installment_count?: number;
  installment_total?: number;
  flow: EFlow;
  created_at: string;
  updated_at: string;
};
