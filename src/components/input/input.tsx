import { StyledInput, StyledInputWrapper } from "./input.styles";

interface IInput {
  type: string;
  value: any;
  setValue: (arg: any) => void;
  placeholder: string;
  name: string;
  isCurrency?: boolean;
}

const formatCurrency = (input: number) => {
  if (!input) return "R$ 0,00";
  let val = input.toLocaleString("pt-br", { minimumIntegerDigits: 3 });

  val = val.replace(/\D/g, "");

  return "R$ " + val.slice(0, val.length - 2) + "," + val.slice(val.length - 2);
};

export const Input = ({
  type,
  value,
  setValue,
  placeholder,
  name,
  isCurrency = false,
}: IInput) => {
  const handleChange = ({ target }: any) => {
    let unformated = target.value;

    if (isCurrency) unformated = Number(target.value.replace(/\D/g, ""));

    setValue(unformated);
  };

  const format = (val: any) => {
    if (isCurrency) return formatCurrency(val);

    return val;
  };

  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{name}</label>
      <StyledInput>
        <input
          id={name}
          type={type}
          value={format(value)}
          onChange={handleChange}
          placeholder={type === "date" ? "mm-dd-aaaa" : placeholder}
          min="1900-01-01"
          max="2100-12-31"
        />
      </StyledInput>
    </StyledInputWrapper>
  );
};
