import { StyledButton } from './Button.styled';

export const ExtraBtn = ({ onClick, text, isActive }) => {
  return (
    <>
      {isActive ? (
        <StyledButton style={{ marginBottom: '30px' }} active onClick={onClick}>
          {text}
        </StyledButton>
      ) : (
        <StyledButton style={{ marginBottom: '30px' }} onClick={onClick}>
          {text}
        </StyledButton>
      )}
    </>
  );
};
