import { Loading } from "..";
import { StyledButton } from "./button.styles";

export type TButtonTypes = "primary" | "secondary" | "tertiary";

interface IButton {
  type?: TButtonTypes;
  text: string;
  onClick: (arg: any) => void;
  isLoading?: boolean;
}

export const Button = ({ type, text, onClick, isLoading = false }: IButton) => {
  const getLoadingColor = () => {
    if (!type || type === "primary") return "light";

    return "primary";
  };

  return (
    <StyledButton
      onClick={isLoading ? () => {} : onClick}
      styledtype={type || "primary"}
    >
      {isLoading ? <Loading color={getLoadingColor()} /> : text}
    </StyledButton>
  );
};
