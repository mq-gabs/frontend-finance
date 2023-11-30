import { StyledButton } from "./button.styles";

export type TButtonTypes = "primary" | "secondary" | "tertiary";

interface IButton {
  type?: TButtonTypes;
  text: string;
  onClick: (arg: any) => void;
}

export const Button = ({ type, text, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} styledtype={type || "primary"}>
      {text}
    </StyledButton>
  );
};
