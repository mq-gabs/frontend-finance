import { ApexOptions } from "apexcharts";
import light from "../../../assets/theme/light";
import text from "../../../assets/theme/text";

const mockedData = [25.12, 12, 13];
const mockedCategories = ["Categoria A", "Categoria B", "Categoria C"];

export const chartOptions: ApexOptions = {
  title: {
    text: "Total do mês por categoria",
    style: {
      color: light.colors.dark,
      fontFamily: text.fontFamily,
      fontSize: "12px",
    },
  },
  chart: {
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
    categories: mockedCategories,
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
      data: mockedData,
    },
  ],
};
