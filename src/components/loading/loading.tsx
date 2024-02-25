import { Icon } from "..";
import { TColors } from "../../utils";
import { StyledLoading } from "./loading.styles";

interface ILoading {
  color: TColors;
}

export const Loading = ({ color }: ILoading) => {
  return (
    <StyledLoading>
      <Icon name="loading" color={color} size={1} />
    </StyledLoading>
  );
};
