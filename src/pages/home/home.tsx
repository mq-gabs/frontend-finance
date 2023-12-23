import { useEffect } from "react";
import { Table } from "../../components";
import { getAllPayments } from "../../services";
import { StyledHome } from "./home.styles";

export const Home = () => {
  const columnsNames = ["Id", "Nome", "Sobrenome"];

  const data = [
    [1, "Gabriel", "Marques"],
    [2, "Lucimara", "Souza"],
    [3, "Maria", "da Conceição Marques de Souza"],
  ];

  const getPayments = async () => {
    const payments = await getAllPayments({});

    console.log({ payments });
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <StyledHome>
      <Table columnsNames={columnsNames} data={data} />
      <Table columnsNames={columnsNames} data={data} />
    </StyledHome>
  );
};
