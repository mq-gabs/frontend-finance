import { StyledSelect } from "./select.styles";

type TSelect = {
  items: { id: number; value: any; name: string }[];
  onChange: (arg: any) => void;
  selected: any;
};

export const Select = ({
  items = [],
  onChange = () => {},
  selected = "-",
}: TSelect) => {
  return (
    <StyledSelect value={selected} onChange={onChange}>
      {items.map((item) => (
        <option key={item.id}>{item.value}</option>
      ))}
    </StyledSelect>
  );
};
