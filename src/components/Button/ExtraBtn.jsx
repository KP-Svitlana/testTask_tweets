import { StyledButton } from "./Button.styled";

export const ExtraBtn = ({ onClick, text, isActive }) => {
  return (
    <>
      {isActive ? (
        <StyledButton active onClick={onClick}>
          {text}
        </StyledButton>
      ) : (
        <StyledButton onClick={onClick}>{text}</StyledButton>
      )}
    </>
  );
};
