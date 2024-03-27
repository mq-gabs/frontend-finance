import { useEffect, useState } from "react";
import { Input, Select } from "../../../components";
import { EFlow, EPaymentType, EStatus, TCategory } from "../../../utils";
import {
  StyledFiltersWrapper,
  StyledPaymentsFilter,
} from "./payments-filter.styles";

import { debounce } from "lodash";
import { getAllCategories } from "../../../services";
import toast from "react-hot-toast";

export type TFilterData = {
  title: string;
  status: EStatus;
  paymentType: EPaymentType;
  flow: EFlow;
  startPayAt: string;
  endPayAt: string;
  categoryId: string;
};

interface IPaymentsFilter {
  data: TFilterData;
  setData: (arg: any) => void;
}

export const PaymentsFilter = ({ data, setData }: IPaymentsFilter) => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  const handleUpdateFilterData = debounce((value: string, key: string) => {
    setData((prev: TFilterData) => ({
      ...prev,
      [key]: value,
    }));
  }, 300);

  const getCategoriesForFilter = async () => {
    const response = await getAllCategories({
      page: 0,
      pageSize: 100,
    });

    if (!response) {
      toast.error('Erro ao buscar as categorias para o filtro!');
      return;
    }

    setCategories(response[0]);    
  }

  useEffect(() => {
    getCategoriesForFilter();
  }, [])

  return (
    <StyledPaymentsFilter>
      <p>Filtros</p>
      <StyledFiltersWrapper>
        <Input
          name="Título"
          placeholder="Título"
          setValue={(value) => handleUpdateFilterData(value, "title")}
          type="text"
        />
        <Select
          items={[
            { id: "1", name: "Pendente", value: EStatus.PENDING },
            { id: "2", name: "Pago", value: EStatus.PAID },
            { id: "4", name: "Atrasado", value: EStatus.LATE },
            { id: "5", name: "Pague hoje", value: EStatus.PAYDAY },
          ]}
          name="Status"
          onChange={(value) => handleUpdateFilterData(value, "status")}
          selected={data.status}
        />
        <Select
          items={[
            { id: "1", name: "Único", value: EPaymentType.UNIQUE },
            { id: "2", name: "Parcelado", value: EPaymentType.INSTALLMENT },
            { id: "3", name: "Recorrente", value: EPaymentType.RECURRENT },
          ]}
          name="Tipo de pagamento"
          onChange={(value) => handleUpdateFilterData(value, "paymentType")}
          selected={data.paymentType}
        />
        {/* <Select
          items={[
            { id: "1", name: "Entrada", value: EFlow.IN },
            { id: "2", name: "Saída", value: EFlow.OUT },
          ]}
          name="Fluxo"
          onChange={(value) => handleUpdateFilterData(value, "flow")}
          selected={data.flow}
        /> */}
        <Select
          items={categories.map((category: TCategory) => ({
            id: category.id,
            name: category.name,
            value: category.id,
          }))}
          name="Categoria"
          onChange={(value) => handleUpdateFilterData(value, "categoryId")}
          selected={data.categoryId}
        />
        <Input
          name="Data do pagamento a partir de"
          placeholder="Pagamento"
          type="date"
          value={data.startPayAt}
          setValue={(value) => handleUpdateFilterData(value, "startPayAt")}
        />
        <Input
          name="Data do pagamento até"
          placeholder="Pagamento"
          type="date"
          value={data.endPayAt}
          setValue={(value) => handleUpdateFilterData(value, "endPayAt")}
        />
      </StyledFiltersWrapper>
    </StyledPaymentsFilter>
  );
};
