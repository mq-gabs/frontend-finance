import { StyledHome } from "./home.styles";
import { formatMyCurrency } from "../../utils/functions";
import { ListMonthPayments } from "./list-month-payments/list-month-payments";
import { ListLatePayments } from "./list-late-payments/list-late-payments";
import { CategoriesChart } from "./categories-chart/categories-chart";
import { NextMonthPayments } from "./next-month-payments/next-month-payments";

const monthsNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Março",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const getMonthName = (index: number) => {
  if (index >= 12) {
    index -= 12;
  }

  return monthsNames[index];
};

export const Home = () => {
  const currentMonthIndex = new Date().getMonth();
  const currentMontName = getMonthName(currentMonthIndex);
  const currentYear = new Date().getFullYear();
  const balance = 123.45;

  return (
    <StyledHome balance_negative={balance < 0}>
      <section className="top">
        <h1>
          {currentMontName} de {currentYear}
        </h1>
        <h1>
          Saldo: <span>{formatMyCurrency(balance)}</span>
        </h1>
      </section>
      <section className="payments-late">
        <ListLatePayments />
      </section>
      <section className="payments-month">
        <ListMonthPayments month={currentMonthIndex} year={currentYear} />
      </section>
      <section className="top-categories">
        <CategoriesChart
          currentMonth={currentMonthIndex}
          currentYear={currentYear}
          currentMonthName={getMonthName(currentMonthIndex)}
        />
      </section>
      <section className="next-month">
        <NextMonthPayments
          nextMonth={currentMonthIndex + 1}
          nextMonthName={getMonthName(currentMonthIndex + 1)}
          currentYear={currentYear}
        />
      </section>
    </StyledHome>
  );
};
