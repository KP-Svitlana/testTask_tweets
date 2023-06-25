import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const StyledLinkWrap = styled.div`
  height: 30px;
  width: 100px;

  display: flex;
  justify-content: center;
  padding: 14px, 28px, 14px, 28px;
  align-items: center;

  background-color: #ebd8ff;
  border-radius: 5px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  :hover {
    transform: scale(1.15);
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #4b2a99;

  &.active {
    color: #5cd3a8;
  }
`;
