import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledFilterLabel = styled.label`
  display: flex;
  gap: 20px;
  flex-direction: row;
  padding: 50px 100px 50px 50px;
  align-items: center;
  align-self: flex-end;

  font-family: "Montserrat";
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
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #4b2a99;
`;
