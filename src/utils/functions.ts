import { EFlow, EStatus } from ".";

export const formatDate = (date: string) => {
  const dt = new Date(date);
  const month = dt.getMonth() + 1;

  return `${dt.getDate().toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
  })}/${month.toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
  })}/${dt.getFullYear()}`;
};

export const getFlow = (flow: EFlow) => {
  if (flow === EFlow.OUT) return "Perda";
  if (flow === EFlow.IN) return "Ganho";

  return "-";
};

export const formatValue = (value: number) => {
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
