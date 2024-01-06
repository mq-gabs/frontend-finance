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

export type TPayment = {
  id: string;
  title: string;
  category_id: string;
  category_name: string;
  category_icon: TIcon;
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

export type TCategory = {
  id: string;
  name: string;
  icon: TIcon;
  created_at: string;
  updated_at: string;
  user_id: string;
};

export type TIcon =
  | "edit"
  | "delete"
  | "food"
  | "transport"
  | "arrowLeft"
  | "arrowRight"
  | "give"
  | "receive"
  | "save"
  | "gym"
  | "leisure"
  | "trip"
  | "enterteinment"
  | "study"
  | "cross"
  | "search"
  | "pills"
  | "doctor"
  | "game"
  | "sport"
  | "device"
  | "exit"
  | "enter"
  | "warn"
  | "ok"
  | "late"
  | "cancel"
  | "payday";

export type TColors =
  | "primary"
  | "secondary"
  | "dark"
  | "light"
  | "grey"
  | "lightGrey"
  | "red"
  | "green"
  | 'yellow'
  | 'blue'
  | 'orange';
