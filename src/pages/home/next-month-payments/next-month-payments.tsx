import { Icon } from "../../../components";
import { StyledNextMonthPayments } from "./next-month-payments.styles";

export const NextMonthPayments = () => {
  return (
    <StyledNextMonthPayments>
      <h2>
        <Icon name="payday" color="primary" />
        Pagamentos do próximo mês
      </h2>
    </StyledNextMonthPayments>
  );
};
