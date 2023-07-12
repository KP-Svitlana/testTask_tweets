import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledWrap = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 50px auto;
`;

export const StyledFilterLabel = styled.label`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #4b2a99;
`;
export const StyledDropdown = styled.select`
  height: 50px;
  padding: 10px;

  background-color: #ebd8ff;
  border-radius: 10px;
  border-color: #4b2a99;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #4b2a99;

  :focus-visible {
    outline: 0px solid transparent;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;

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

  :hover {
    transform: scale(1.15);
  }
`;
