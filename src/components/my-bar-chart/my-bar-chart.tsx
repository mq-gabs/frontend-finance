import { StyledBarsWrapper, StyledMyBarChart } from "./my-bar-chart.styles";

interface IMyBarChart {
  title: string;
}

export const MyBarChart = ({ title }: IMyBarChart) => {
  return (
    <StyledMyBarChart>
      <p>{title}</p>
      <StyledBarsWrapper></StyledBarsWrapper>
    </StyledMyBarChart>
  );
};
