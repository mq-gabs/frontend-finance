import { StyledInput } from "./input.styles";

interface IInput {
  type: string;
  value: string | number;
  setValue: (arg: any) => void;
  placeholder: string;
}

export const Input = ({ type, value, setValue, placeholder }: IInput) => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </StyledInput>
  );
};
