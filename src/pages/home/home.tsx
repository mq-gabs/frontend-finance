import { Table } from "../../components";
import { StyledHome } from "./home.styles";

export const Home = () => {
  const columnsNames = ["Id", "Nome", "Sobrenome"];

  const data = [
    [1, "Gabriel", "Marques"],
    [2, "Lucimara", "Souza"],
    [3, "Maria", "da Conceição Marques de Souza"],
  ];

  return (
    <StyledHome>
      <Table columnsNames={columnsNames} data={data} />
    </StyledHome>
  );
};
