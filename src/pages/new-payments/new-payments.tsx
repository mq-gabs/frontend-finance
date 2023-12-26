import { useState } from "react";
import { Input, Select } from "../../components";
import { EFlow, EPaymentType } from "../../utils";
import { StyledNewPayments } from "./new-payments.styles";
import { formatValue } from "../../utils/functions";

type TNewPaymentForm = {
  title: string;
  pay_at: string;
  category_id: string;
  value: number;
  payment_type: EPaymentType;
  flow: EFlow;
};

export const NewPayments = () => {
  const [formData, setFormData] = useState<TNewPaymentForm>(
    {} as TNewPaymentForm
  );

  console.log({ formData });

  const onChangeFormData = (value: any, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <StyledNewPayments>
      <h1>Novo pagamento</h1>
      <form>
        <Input
          type="text"
          placeholder="Título"
          value={formData.title}
          setValue={({ target: { value } }) => onChangeFormData(value, "title")}
        />
        <Input
          type="text"
          placeholder="Valor"
          value={formData.value}
          setValue={({ target: { value } }) =>
            onChangeFormData(Number(value), "value")
          }
        />
        <Select
          items={[
            { id: 0, name: "out", value: "Saída" },
            { id: 1, name: "in", value: "Entrada" },
          ]}
          onChange={({ target }) => onChangeFormData(target.value, "flow")}
          selected={formData.flow}
        />
      </form>
    </StyledNewPayments>
  );
};
