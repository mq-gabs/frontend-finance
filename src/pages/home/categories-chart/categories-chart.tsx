import { Icon } from "../../../components";
import {
  StyledCategoriesCharts,
  StyledNoContent,
} from "./categories-chart.styles";
import Chart from "react-apexcharts";
import { getChartOptions } from "./utils";
import { useEffect, useState } from "react";
import { EFlow, EStatus, TCategory } from "../../../utils";
import { getTopCategories } from "../../../services";

interface ICategoriesChart {
  currentMonth: number;
  currentYear: number;
  currentMonthName: string;
}

export const CategoriesChart = ({
  currentMonth,
  currentYear,
  currentMonthName,
}: ICategoriesChart) => {
  const [categoriesNames, setCategoriesNames] = useState<string[]>([]);
  const [categoriesSpents, setCategoriesSpents] = useState<number[]>([]);

  const chartOptions = getChartOptions(categoriesNames, categoriesSpents);

  const getTop5Categories = async () => {
    const categories = await getTopCategories({
      startDate: new Date(currentYear, currentMonth, 1).toJSON().slice(0, 10),
      endDate: new Date(currentYear, currentMonth + 1, 0).toJSON().slice(0, 10),
      flow: EFlow.OUT,
      status: EStatus.PAID,
    });

    if (!categories) return;

    setCategoriesNames(categories.map((category: TCategory) => category.name));
    setCategoriesSpents(
      categories.map((category: TCategory) =>
        category.payments_count?.toFixed(2)
      )
    );
  };

  useEffect(() => {
    getTop5Categories();
  }, []);

  return (
    <StyledCategoriesCharts>
      <h2>
        <Icon name="categories" color="primary" /> Top 5 categorias
      </h2>
      {categoriesNames.length !== 0 && (
        <Chart options={chartOptions} series={chartOptions.series} />
      )}
      {categoriesNames.length === 0 && (
        <StyledNoContent>
          <p>Nenhuma categoria foi utilizada no mês de {currentMonthName}</p>
        </StyledNoContent>
      )}
    </StyledCategoriesCharts>
  );
};
