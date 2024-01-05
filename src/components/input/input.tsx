import { StyledInput, StyledInputWrapper } from "./input.styles";

interface IInput {
  type: string;
  value: any;
  setValue: (arg: any) => void;
  placeholder: string;
  name: string;
}

export const Input = ({ type, value, setValue, placeholder, name }: IInput) => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{name}</label>
      <StyledInput>
        <input
          id={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </StyledInput>
    </StyledInputWrapper>
  );
};
