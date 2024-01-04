import { StyledSelect, StyledSelectWrapper } from "./select.styles";

type TSelect = {
  items: { id: number | string; value: any; name: string }[];
  onChange: (arg: any) => void;
  name: string;
};

export const Select = ({
  items = [],
  onChange = () => {},
  name,
}: TSelect) => {
  
  const handleChange = (e: any) => {
    console.log({ val: e.target.id })
    const realValue = items.find(item => item.name === e.target.value)?.value || '-';
    onChange(realValue);
  }

  return (
    <StyledSelectWrapper>
      <label htmlFor={name}>{name}</label>
      <StyledSelect id={name} onChange={handleChange}>
        <option key="first">-</option>
        {items.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};
