import { StyledButton } from "./Button.styled";

export const Button = ({ isActive, onClick }) => {
  return (
    <>
      {isActive ? (
        <StyledButton active onClick={onClick}>
          Following
        </StyledButton>
      ) : (
        <StyledButton onClick={onClick}>Follow</StyledButton>
      )}
    </>
  );
};
