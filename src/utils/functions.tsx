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

export const formatMyCurrency = (value: number) => {
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
export const getStatusInfo = (
  status: EStatus
): { icon: TIcon; color: TColors; name: string } => {
  const statusOptions = {
    [`${EStatus.CANCELLED}`]: {
      icon: "cancel",
      color: "grey",
      name: "Cancelado",
    },
    [`${EStatus.LATE}`]: { icon: "late", color: "red", name: "Atrasado" },
    [`${EStatus.PAID}`]: { icon: "ok", color: "green", name: "Pago" },
    [`${EStatus.PAYDAY}`]: {
      icon: "payday",
      color: "blue",
      name: "Dia do pagamento",
    },
    [`${EStatus.PENDING}`]: { icon: "warn", color: "yellow", name: "Pendente" },
  };

  const selectedInfo = statusOptions[status];

  return selectedInfo as { icon: TIcon; color: TColors; name: string };
};

export const getCountRestDays = (date: string) => {
  const [year, month, day] = date.split("-");

  const targetDate = new Date(Number(year), Number(month) - 1, Number(day));
  const todaysDate = new Date();

  const diff = targetDate.getDate() - todaysDate.getDate();

  if (diff > 0) {
    return `Faltam ${diff} dias`;
  }

  if (diff === 0) {
    return `Hoje é o dia`;
  }

  if (diff < 0) {
    return `${-1 * diff} dias em atraso`;
  }

  return;
};
