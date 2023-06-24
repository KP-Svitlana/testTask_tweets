import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? "#5CD3A8" : "#ebd8ff")};
  width: 196px;
  height: 50px;
  padding: 14px, 28px, 14px, 28px;
  align-items: center;
  margin: 0 auto;

  border-radius: 10px;
  border-color: ${(props) => (props.active ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
