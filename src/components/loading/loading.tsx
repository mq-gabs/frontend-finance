import { Icon } from "..";
import { TColors } from "../../utils";
import { StyledLoading, StyledLoadingWrapper } from "./loading.styles";

interface ILoading {
  color: TColors;
}

export const Loading = ({ color }: ILoading) => {
  return (
    <StyledLoading>
      <StyledLoadingWrapper>
        <Icon name="loading" color={color} size={1} />
      </StyledLoadingWrapper>
    </StyledLoading>
  );
};
