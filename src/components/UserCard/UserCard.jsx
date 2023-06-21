import { Button } from "../Button";
import {
  StyledUserCard,
  StyledLogo,
  StyledImg,
  StyledElement,
} from "./UserCard.styled";

import Logo_1x from "../../img/Logo_1x.png";
import Logo_2x from "../../img/Logo_2x.png";
import Logo_3x from "../../img/Logo_3x.png";

import userImg_1x from "../../img/userImg_1x.png";
import userImg_2x from "../../img/userImg_2x.png";
import userImg_3x from "../../img/userImg_3x.png";

export const UserCard = (isActive) => {
  return (
    <StyledUserCard>
      <StyledLogo>
        <source srcSet={`${Logo_1x} 1x,${Logo_2x} 2x,${Logo_3x} 3x`} />
        <img src={Logo_1x} alt="Logo GoIT" />
      </StyledLogo>
      <StyledImg>
        <source srcSet={`${userImg_1x} 1x,${userImg_2x} 2x,${userImg_3x} 3x`} />
        <img src={userImg_1x} alt="Logo GoIT" />
      </StyledImg>
      <StyledElement />
      <Button isActive={isActive} />
    </StyledUserCard>
  );
};
