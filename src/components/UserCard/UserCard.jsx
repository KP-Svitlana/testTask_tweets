import { useState } from 'react';

import { Button } from 'components/Button';
import {
  StyledUserCard,
  StyledLogo,
  StyledImg,
  StyledTextWrap,
  StyledText,
  StyledAvatar,
} from './UserCard.styled';

import { subFolower, addFolower } from 'helpers';

import Logo_1x from 'img/Logo_1x.png';
import Logo_2x from 'img/Logo_2x.png';
import Logo_3x from 'img/Logo_3x.png';
import { ReactComponent as AvatarSvg } from 'img/svg/Ellipse 1 (Stroke).svg';

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
      <StyledImg />

      <AvatarSvg
        style={{ position: 'absolute', top: '178px', left: '150px', zIndex: 1 }}
      />
      <StyledAvatar src={`${avatar}`} alt="User`s avatar" />

      <StyledTextWrap>
        <StyledText>
          {new Intl.NumberFormat('en-US').format(tweets)} tweets
        </StyledText>
        <StyledText>
          {new Intl.NumberFormat('en-US').format(userFollovers)} Followers
        </StyledText>
      </StyledTextWrap>

      <Button isActive={userIsFollowing} onClick={onBtnClick} />
    </StyledUserCard>
  );
};
