import { EFlow, EStatus, TColors, TIcon } from ".";
import { Icon } from "../components";

export const formatDate = (date: string) => {
  const dt = new Date(date);
  const month = dt.getMonth() + 1;

  const day = dt.getDate() + 1;

  return `${day.toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
  })}/${month.toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
  })}/${dt.getFullYear()}`;
};

export const getFlow = (flow: EFlow) => {
  if (flow === EFlow.OUT) return <Icon name="exit" color="red" />;
  if (flow === EFlow.IN) return <Icon name="enter" color="green" />;

  return "-";
};

export const formatTotal = (value: number) => {
  return (
    "R$ " +
    value.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

export const formatStatus = (status: EStatus) => {
  if (status === EStatus.CANCELLED) return "Cancelado";
  if (status === EStatus.LATE) return "Atrasado";
  if (status === EStatus.PAID) return "Pago";
  if (status === EStatus.PAYDAY) return "Pague hoje";
  if (status === EStatus.PENDING) return "Pendente";
  return "-";
};
export const formatStatusIcon = (
  status: EStatus
): { name: TIcon; color: TColors } => {
  if (status === EStatus.CANCELLED) return { name: "cancel", color: "red" };
  if (status === EStatus.LATE) return { name: "late", color: "orange" };
  if (status === EStatus.PAID) return { name: "ok", color: "green" };
  if (status === EStatus.PAYDAY) return { name: "payday", color: "blue" };
  if (status === EStatus.PENDING) return { name: "warn", color: "yellow" };
  return { name: "cancel", color: "red" };
};
