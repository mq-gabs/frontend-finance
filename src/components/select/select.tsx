import { StyledSelect } from "./select.styles";

type TSelect = {
  items: { id: number | string; value: any; name?: string }[];
  onChange: (arg: any) => void;
  selected?: any;
};

export const Select = ({
  items = [],
  onChange = () => {},
  selected = "-",
}: TSelect) => {
  return (
    <StyledSelect value={selected} onChange={onChange}>
      <option key="first">-</option>
      {items.map((item) => (
        <option key={item.id}>{item.value}</option>
      ))}
    </StyledSelect>
  );
};
