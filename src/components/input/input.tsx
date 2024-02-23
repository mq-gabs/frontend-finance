import {
  StyledInput,
  StyledInputDate,
  StyledInputWrapper,
} from "./input.styles";

interface IInput {
  type: string;
  value?: any;
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

const formatDate = (date: string) => {
  if (date?.length !== 10) {
    return "dd/mm/aaaa";
  }

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8);

  return `${day}/${month}/${year}`;
};

export const Input = ({
  type,
  value,
  setValue,
  placeholder,
  name,
  isCurrency = false,
}: IInput) => {
  // const [date, setDate] = useState(formatDate(value));

  const date = formatDate(value);

  console.log({ value });

  const handleChange = ({ target }: any) => {
    let unformated = target.value;

    console.log({ unformated });

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
        {type === "date" && <StyledInputDate value={date} />}
      </StyledInput>
    </StyledInputWrapper>
  );
};
