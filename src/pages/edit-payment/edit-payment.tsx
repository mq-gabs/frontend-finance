import { useEffect, useState } from "react";
import { Button, Input, Select } from "../../components";
import { StyledEditPayment, StyledForm } from "./edit-payment.styles";
import { useNavigate, useParams } from "react-router-dom";
import { getPaymentById } from "../../services/payments/get-payment-by-id";
import { EStatus, TCategory } from "../../utils";
import { getAllCategories, updatePayment } from "../../services";

type TPaymentEditingInfo = {
  title: string;
  status: EStatus;
  payAt: string;
  category_id: string;
  value: number;
};

export const EditPayment = () => {
  const { id } = useParams();
  const [paymentInfo, setPaymentInfo] = useState<TPaymentEditingInfo>(
    {} as TPaymentEditingInfo
  );
  const [previousTitle, setPreviousTitle] = useState<string>("");
  const [categoriesList, setCategoriesList] = useState<TCategory[]>([]);
  const navigate = useNavigate();

  const getPaymentInfo = async () => {
    if (!id) return;

    const response = await getPaymentById({ id });

    if (!response) return;

    setPaymentInfo({
      ...response,
      value: response.value * 100,
    });
    setPreviousTitle(response.title);
  };

  const getCategoriesList = async () => {
    const response = await getAllCategories({
      page: 0,
      pageSize: 100,
    });

    if (!response) return;

    const [categories] = response;

    setCategoriesList(categories);
  };

  useEffect(() => {
    getPaymentInfo();
    getCategoriesList();
  }, []);

  const handleUpdatePaymentInfo = (value: string, key: string) => {
    setPaymentInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleUpdatePayment = async (e: any) => {
    e.preventDefault();

    if (!id) return;

    await updatePayment({
      id,
      title: paymentInfo.title,
      category_id: paymentInfo.category_id,
      pay_at: paymentInfo.payAt,
      status: paymentInfo.status,
      value: paymentInfo.value / 100,
    });

    navigate(-1);
  };

  return (
    <StyledEditPayment>
      <h2>Editar pagamento{previousTitle && ` - ${previousTitle}`}</h2>

      <StyledForm>
        <Input
          name="Título"
          placeholder="Título"
          setValue={(value) => handleUpdatePaymentInfo(value, "title")}
          value={paymentInfo.title}
          type="text"
        />
        <Input
          name="Valor"
          placeholder="Valor"
          setValue={(value) => handleUpdatePaymentInfo(value, "value")}
          value={paymentInfo.value}
          type="text"
          isCurrency
        />
        <Select
          name="Status"
          items={[
            { id: 0, name: "Pendente", value: "PENDING" },
            { id: 1, name: "Pago", value: "PAID" },
            { id: 2, name: "Atrasado", value: "LATE" },
            { id: 3, name: "Pague hoje", value: "PAYDAY" },
          ]}
          selected={paymentInfo.status}
          onChange={(value) => handleUpdatePaymentInfo(value, "status")}
        />
        <Select
          name="Categoria"
          items={categoriesList.map(({ id, name }) => ({
            id,
            value: id,
            name,
          }))}
          onChange={(value) => handleUpdatePaymentInfo(value, "categoryId")}
          selected={paymentInfo.category_id}
        />
        <Input
          name="Data de pagamento"
          placeholder="Data de pagamento"
          type="date"
          setValue={(value) => handleUpdatePaymentInfo(value, "payAt")}
          value={paymentInfo.value}
        />
        <Button onClick={handleUpdatePayment} text="Salvar" />
      </StyledForm>
    </StyledEditPayment>
  );
};
