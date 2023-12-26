import { useEffect, useState } from "react";
import { Table } from "../../components";
import { getAllCategories } from "../../services";
import { StyledCategories, StyledColorTag } from "./categories.styles";

const ColorTag = ({ color }: { color: string }) => {
  return <StyledColorTag style={{ background: color }} />;
};

export const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [categoriesCount, setCategoriesCount] = useState<number>(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const columnsNames = ["Nome", "Cor"];

  const getCategories = async () => {
    const response = await getAllCategories({
      page,
      pageSize,
    });

    const formated: any[] = response[0].map((category: any) => [
      category.name,
      <ColorTag color={category.color} />,
    ]);

    setCategories(formated);
    setCategoriesCount(response[1]);
  };

  useEffect(() => {
    getCategories();
  }, [page, pageSize]);
  console.log({ categories });

  return (
    <StyledCategories>
      <Table
        columnsNames={columnsNames}
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
        total={categoriesCount}
        data={categories}
      />
    </StyledCategories>
  );
};
