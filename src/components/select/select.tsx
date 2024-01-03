import { StyledSelect, StyledSelectWrapper } from "./select.styles";

type TSelect = {
  items: { id: number | string; value: any; name?: string }[];
  onChange: (arg: any) => void;
  selected?: any;
  name: string;
};

export const Select = ({
  items = [],
  onChange = () => {},
  selected = "-",
  name,
}: TSelect) => {
  return (
    <StyledSelectWrapper>
      <label htmlFor={name}>{name}</label>
      <StyledSelect id={name} value={selected} onChange={onChange}>
        <option key="first">-</option>
        {items.map((item) => (
          <option key={item.id}>{item.value}</option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};
