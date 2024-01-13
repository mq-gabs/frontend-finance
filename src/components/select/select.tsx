import { StyledSelect, StyledSelectWrapper } from "./select.styles";

type TSelect = {
  items: { id: number | string; value: any; name: string }[];
  onChange: (arg: any) => void;
  name: string;
  selected: any;
};

export const Select = ({
  items = [],
  onChange = () => {},
  name,
  selected,
}: TSelect) => {
  const handleChange = (e: any) => {
    const realValue =
      items.find((item) => item.name === e.target.value)?.value || "";
    onChange(realValue);
  };

  const getSelected = () => {
    const selectedItem =
      items.find((item) => item.value === selected)?.name || "-";

    return selectedItem;
  };

  return (
    <StyledSelectWrapper>
      <label htmlFor={name}>{name}</label>
      <StyledSelect id={name} value={getSelected()} onChange={handleChange}>
        <option key="first">-</option>
        {items.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};
