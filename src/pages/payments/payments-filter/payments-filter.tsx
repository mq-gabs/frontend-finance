import { Input, Select } from "../../../components";
import { EFlow, EPaymentType, EStatus } from "../../../utils";
import {
  StyledFiltersWrapper,
  StyledPaymentsFilter,
} from "./payments-filter.styles";

import { debounce } from "lodash";

export type TFilterData = {
  title: string;
  status: EStatus;
  paymentType: EPaymentType;
  flow: EFlow;
  startPayAt: string;
  endPayAt: string;
};

interface IPaymentsFilter {
  data: TFilterData;
  setData: (arg: any) => void;
}

export const PaymentsFilter = ({ data, setData }: IPaymentsFilter) => {
  const handleUpdateFilterData = debounce((value: string, key: string) => {
    setData((prev: TFilterData) => ({
      ...prev,
      [key]: value,
    }));
  }, 300);

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
        <Select
          items={[
            { id: "1", name: "Entrada", value: EFlow.IN },
            { id: "2", name: "Saída", value: EFlow.OUT },
          ]}
          name="Fluxo"
          onChange={(value) => handleUpdateFilterData(value, "flow")}
          selected={data.flow}
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
