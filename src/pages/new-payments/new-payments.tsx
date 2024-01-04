import { useEffect, useState } from "react";
import { Button, Input, Select } from "../../components";
import { EFlow, EPaymentType, TCategory } from "../../utils";
import { StyledNewPayments } from "./new-payments.styles";
import { createPayment, getAllCategories } from "../../services";

type TNewPaymentForm = {
  title: string;
  pay_at: string;
  category: string;
  value: number;
  payment_type: string;
  flow: string;
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

    const { category, flow, pay_at, payment_type, title, value } = formData;

    const _category = category;
    // @ts-expect-error
    const _flow: EFlow = flow;
    // @ts-expect-error
    const _paymentType: EPaymentType = payment_type;

    if (!_category || !_flow || !_paymentType || !pay_at || !title || !value) {
      alert("Preencha todos os campos!");
      return;
    }

    const response = await createPayment({
      title,
      value: Number(value),
      category_id: _category,
      flow: _flow,
      pay_at,
      payment_type: _paymentType,
      total: Number(value),
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
        <Input
          name="Valor"
          type="text"
          placeholder="Valor"
          value={formData.value}
          setValue={(value) => onChangeFormData(Number(value), "value")}
        />
        <Select
          name="Fluxo"
          items={[
            { id: 1, name: "Entrada", value: 'IN' },
            { id: 0, name: "Saída", value: 'OUT' },
          ]}
          onChange={(value) =>
            onChangeFormData(value, "flow")
          }
        />
        <Select
          name="Categoria"
          items={categories.map(({ id, name }) => ({ id, value: id, name, }))}
          onChange={(value) => onChangeFormData(value, "category")}
        />
        <Select
          name="Tipo de pagamento"
          items={[
            { id: 0, name: "Único", value: "UNIQUE" },
            { id: 1, name: "Parcelado", value: "INSTALLMENT" },
            { id: 2, name: "Recorrente", value: "RECURRENT" },
          ]}
          onChange={(value) =>
            onChangeFormData(value, "payment_type")
          }
        />
        <Input
          name="Pagar em"
          type="date"
          placeholder="Data"
          value={formData.pay_at}
          setValue={(value) => onChangeFormData(value, "pay_at")}
        />
        <Button text="Criar" onClick={submitPayment} />
      </form>
    </StyledNewPayments>
  );
};
