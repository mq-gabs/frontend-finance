import { Icon } from "../../../components";
import { StyledCategoriesCharts } from "./categories-chart.styles";
import Chart from "react-apexcharts";
import { chartOptions } from "./utils";

export const CategoriesChart = () => {
  return (
    <StyledCategoriesCharts>
      <h2>
        <Icon name="categories" color="primary" /> Top 5 categorias
      </h2>
      <Chart options={chartOptions} series={chartOptions.series} />
    </StyledCategoriesCharts>
  );
};
