import { EFlow, EPaymentType, EStatus, TColors, TIcon } from ".";
import { Icon } from "../components";

export const formatDate = (date: string) => {
  const dt = new Date(date);
  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;

  let day = dt.getDate() + 1;

  if (
    (day > 31 && month !== 2) ||
    (day > 28 && month === 2 && year % 4 !== 0) ||
    (day > 29 && month === 2 && year % 4 === 0)
  ) {
    day = 1;
    month += 1;
  }

  if (month > 12) {
    month = 1;
    year += 1;
  }

  return `${day.toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
  })}/${month.toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
  })}/${year}`;
};

export const getFlow = (flow: EFlow) => {
  if (flow === EFlow.OUT) return <Icon name="give" color="red" size={1.2} />;
  if (flow === EFlow.IN)
    return <Icon name="receive" color="green" size={1.2} />;

  return "-";
};

export const formatMyCurrency = (value: number) => {
  return (
    "R$ " +
    value.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 2,
    })
  );
};

export const formatPaymentType = (value: EPaymentType) => {
  const paymentsTypesList = {
    [`${EPaymentType.INSTALLMENT}`]: "Parcelado",
    [`${EPaymentType.RECURRENT}`]: "Recorrente",
    [`${EPaymentType.UNIQUE}`]: "Único",
  };

  return paymentsTypesList[value];
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

  const rawDiff: number = targetDate.getTime() - todaysDate.getTime();

  const diff = Math.ceil(rawDiff / 1000 / 60 / 60 / 24);

  if (diff > 0) {
    if (diff === 1) {
      return `Falta ${diff} dia`;
    }

    return `Faltam ${diff} dias`;
  }

  if (diff === 0) {
    return `Hoje é o dia`;
  }

  if (diff < 0) {
    if (diff === -1) {
      return `${-1 * diff} dia em atraso`;
    }

    return `${-1 * diff} dias em atraso`;
  }

  return;
};
