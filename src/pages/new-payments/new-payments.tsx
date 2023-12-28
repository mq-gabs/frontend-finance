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

  const getFlow = (value: string) => {
    if (value === "Entrada") return "IN";
    if (value === "Saída") return "OUT";
    return;
  };

  const getCategoryId = (name: string) => {
    const category = categories.find((category) => category.name === name);

    return category?.id;
  };

  const getPaymentType = (value: string) => {
    if (value === "Único") return "UNIQUE";
    if (value === "Recorrente") return "RECURRENT";
    if (value === "Parcelado") return "INSTALLMENT";
    return;
  };

  const submitPayment = async (e: any) => {
    e.preventDefault();

    const { category, flow, pay_at, payment_type, title, value } = formData;

    const _category = getCategoryId(category);
    // @ts-expect-error
    const _flow: EFlow = getFlow(flow);
    // @ts-expect-error
    const _paymentType: EPaymentType = getPaymentType(payment_type);

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
          type="text"
          placeholder="Título"
          value={formData.title}
          setValue={(value) => onChangeFormData(value, "title")}
        />
        <Input
          type="text"
          placeholder="Valor"
          value={formData.value}
          setValue={(value) => onChangeFormData(Number(value), "value")}
        />
        <Select
          items={[
            { id: 1, value: "Entrada" },
            { id: 0, value: "Saída" },
          ]}
          onChange={({ target }) =>
            onChangeFormData(target.value || "-", "flow")
          }
          selected={formData.flow}
        />
        <Select
          items={categories.map(({ id, name }) => ({ id, value: name }))}
          onChange={({ target }) => onChangeFormData(target.value, "category")}
          selected={formData.category}
        />
        <Select
          items={[
            { id: 0, value: "Único", name: "UNIQUE" },
            { id: 1, value: "Parcelado", name: "INSTALLMENT" },
            { id: 2, value: "Recorrente", name: "RECURRENT" },
          ]}
          onChange={({ target }) =>
            onChangeFormData(target.value, "payment_type")
          }
          selected={formData.payment_type}
        />
        <Input
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
