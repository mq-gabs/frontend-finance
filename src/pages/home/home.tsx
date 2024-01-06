import { useEffect, useState } from "react";
import { getAllPayments } from "../../services";
import { StyledHome } from "./home.styles";
import { List } from "./list/list";
import { TPayment } from "../../utils";

export const Home = () => {
  const [pays, setPays] = useState<TPayment[]>([]);
  const [paysTotal, setPaysTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const getPayments = async () => {
    const payments = await getAllPayments({ page, pageSize });

    setPays(payments[0]);
    setPaysTotal(payments[1]);
  };

  useEffect(() => {
    getPayments();
  }, [page, pageSize]);

  return (
    <StyledHome>
      <section className="filters"></section>
      <section className="list">
        <List
          pays={pays}
          paysCount={paysTotal}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </section>
      <section className="total"></section>
      <section className="other"></section>
    </StyledHome>
  );
};
