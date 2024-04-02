import { StyledTextarea } from "./textarea.styles";

interface ITextarea {
  name: string;
  cols?: number;
  rows?: number;
  value: string;
  placeholder: string;
  setValue: (arg: any) => void;
}

export const Textarea = ({
  name,
  cols = 30,
  rows = 10,
  value,
  placeholder,
  setValue,
}: ITextarea) => {
  return (
    <StyledTextarea>
      <label htmlFor={name}>{name}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      ></textarea>
    </StyledTextarea>
  );
};
