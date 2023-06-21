import { StyledButton } from "./Button.styled";

export const Button = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <StyledButton active>Following</StyledButton>
      ) : (
        <StyledButton>Follow</StyledButton>
      )}
    </>
  );
};
