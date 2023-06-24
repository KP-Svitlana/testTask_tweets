import { useState } from "react";

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

import Logo_1x from "../../img/Logo_1x.png";
import Logo_2x from "../../img/Logo_2x.png";
import Logo_3x from "../../img/Logo_3x.png";

import userImg_1x from "../../img/userImg_1x.png";
import userImg_2x from "../../img/userImg_2x.png";
import userImg_3x from "../../img/userImg_3x.png";

export const UserCard = ({ id, tweets, followers, isFollowing, avatar }) => {
  const [userFollovers, setUserFollowers] = useState(followers);
  const [userIsFollowing, setUserIsFollowing] = useState(isFollowing);

  function onBtnClick() {
    if (userIsFollowing) {
      subFolower(userFollovers, id);
      setUserFollowers(userFollovers - 1);
      setUserIsFollowing(false);
    } else {
      addFolower(userFollovers, id);
      setUserFollowers(userFollovers + 1);
      setUserIsFollowing(true);
    }
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
        <StyledText>
          {new Intl.NumberFormat("en-US").format(tweets)} tweets
        </StyledText>
        <StyledText>
          {new Intl.NumberFormat("en-US").format(userFollovers)} Followers
        </StyledText>
      </StyledTextWrap>

      <Button isActive={userIsFollowing} onClick={onBtnClick} />
    </StyledUserCard>
  );
};
