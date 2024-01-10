import { ApexOptions } from "apexcharts";
import light from "../../../assets/theme/light";
import text from "../../../assets/theme/text";

export const getChartOptions = (
  categories: string[],
  data: number[]
): ApexOptions => {
  const chartOptions: ApexOptions = {
    title: {
      text: "Total do mês por categoria",
      style: {
        color: light.colors.dark,
        fontFamily: text.fontFamily,
        fontSize: "12px",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
      },
    },
    chart: {
      height: 200,
      toolbar: {
        show: false,
      },
      selection: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      type: "bar",
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    series: [
      {
        name: "Total",
        type: "bar",
        color: light.colors.primary,
        data: data,
      },
    ],
  };

  return chartOptions;
};
