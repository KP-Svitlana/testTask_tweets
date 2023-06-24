import { StyledHeader, StyledLink, StyledLinkWrap } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLinkWrap>
        <StyledLink to="/" end>
          Home
        </StyledLink>
      </StyledLinkWrap>
      <StyledLinkWrap>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </StyledLinkWrap>
    </StyledHeader>
  );
};
