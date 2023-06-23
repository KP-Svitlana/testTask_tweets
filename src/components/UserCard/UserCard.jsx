import { useState, useEffect } from "react";

import { Button } from "../Button";
import {
  StyledUserCard,
  StyledLogo,
  StyledImg,
  StyledElement,
  StyledTextWrap,
  StyledText,
  StyledAvatar,
} from "./UserCard.styled";

import { subFolower, addFolower } from "../../helpers";
import { getUserbyId } from "../../API/API";

import Logo_1x from "../../img/Logo_1x.png";
import Logo_2x from "../../img/Logo_2x.png";
import Logo_3x from "../../img/Logo_3x.png";

import userImg_1x from "../../img/userImg_1x.png";
import userImg_2x from "../../img/userImg_2x.png";
import userImg_3x from "../../img/userImg_3x.png";

export const UserCard = ({ id, tweets, followers, isFollowing, avatar }) => {
  function onBtnClick() {
    if (isFollowing) {
      subFolower(followers, id);
    }
    addFolower(followers, id);
  }

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
      <StyledAvatar src={`${avatar}`} />

      <StyledTextWrap>
        <StyledText>{tweets} tweets</StyledText>
        <StyledText>{followers} Followers</StyledText>
      </StyledTextWrap>

      <Button isActive={isFollowing} onClick={onBtnClick} />
    </StyledUserCard>
  );
};
