import { useEffect, useState } from "react";
import { Button, Input, Select } from "../../components";
import { EFlow, EPaymentType, TCategory } from "../../utils";
import { StyledNewPayments } from "./new-payments.styles";
import { createPayment, getAllCategories } from "../../services";

type TNewPaymentForm = {
  title: string;
  pay_at: string;
  category_id: string;
  value: string;
  payment_type: EPaymentType;
  flow: EFlow;
  total?: number;
  installment_total?: number;
};

export const NewPayments = () => {
  const [formData, setFormData] = useState<TNewPaymentForm>(
    {} as TNewPaymentForm
  );
  const [categories, setCategories] = useState<TCategory[]>([]);

  console.log({ formData });

  const onChangeFormData = (value: any, field: string) => {
    console.log({ value });
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getCategories = async () => {
    const response = await getAllCategories({});

    if (!response) return;

    setCategories(response[0]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const submitPayment = async (e: any) => {
    e.preventDefault();

    const {
      category_id,
      flow,
      pay_at,
      payment_type,
      title,
      value,
      total,
      installment_total,
    } = formData;

    if (!category_id || !flow || !payment_type || !pay_at || !title || !value) {
      alert("Preencha todos os campos!");
      return;
    }

    const response = await createPayment({
      title,
      value: Number(value),
      total: Number(value || total),
      category_id,
      flow,
      pay_at,
      payment_type,
      installment_total,
    });

    if (!response) alert("Deu erro");
  };

  return (
    <StyledNewPayments>
      <h1>Novo pagamento</h1>
      <form>
        <Input
          name="Título"
          type="text"
          placeholder="Título"
          value={formData.title}
          setValue={(value) => onChangeFormData(value, "title")}
        />
        <Select
          name="Fluxo"
          items={[
            { id: 1, name: "Entrada", value: "IN" },
            { id: 0, name: "Saída", value: "OUT" },
          ]}
          onChange={(value) => onChangeFormData(value, "flow")}
          selected={formData.flow}
        />
        <Input
          name="Valor"
          type="text"
          placeholder="Valor"
          value={formData.value}
          setValue={(value) => onChangeFormData(value, "value")}
        />
        <Select
          name="Categoria"
          items={categories.map(({ id, name }) => ({ id, value: id, name }))}
          onChange={(value) => onChangeFormData(value, "category_id")}
          selected={formData.category_id}
        />
        <Input
          name="Pagar em"
          type="date"
          placeholder="Data"
          value={formData.pay_at}
          setValue={(value) => onChangeFormData(value, "pay_at")}
        />
        <Select
          name="Tipo de pagamento"
          items={[
            { id: 0, name: "Único", value: "UNIQUE" },
            { id: 1, name: "Parcelado", value: "INSTALLMENT" },
            { id: 2, name: "Recorrente", value: "RECURRENT" },
          ]}
          selected={formData.payment_type}
          onChange={(value) => onChangeFormData(value, "payment_type")}
        />
        {formData.payment_type === EPaymentType.INSTALLMENT && (
          <Input
            type="number"
            name="Número de parcelas"
            placeholder="Número de parcelas"
            setValue={(value) => onChangeFormData(value, "installment_total")}
            value={formData.installment_total || ""}
          />
        )}
        <Button text="Criar" onClick={submitPayment} />
      </form>
    </StyledNewPayments>
  );
};
