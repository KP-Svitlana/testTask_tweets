import styled from '@emotion/styled';

import userImg_1x from 'img/userImg_1x.png';
import userImg_2x from 'img/userImg_2x.png';
import userImg_3x from 'img/userImg_3x.png';

export const StyledUserCard = styled.li`
  width: 380px;
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  position: relative;
`;

export const StyledLogo = styled.picture`
  margin-top: 20px;
  margin-left: 20px;
`;

export const StyledImg = styled.picture`
  position: relative;
  top: -14px;
  left: 0;
  margin: 0 auto;
  margin-bottom: 4px;
  width: 308px;
  height: 168px;
  background-image: url(${userImg_1x});
  background-size: 308px 168px;

  @media (min-resolution: 192dpi) {
    background-image: url(${userImg_2x});
    background-size: 308px 168px;
  }
  @media (min-resolution: 288dpi) {
    background-image: url(${userImg_3x});
    background-size: 308px 168px;
  }
`;

export const StyledAvatar = styled.img`
  width: 64px;
  height: 64px;
  background: #ebd8ff;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  position: absolute;
  top: 178px;
  left: 150px;
`;

export const StyledTextWrap = styled.div`
  padding-bottom: 26px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  &::before {
    content: ' ';
    margin-bottom: 46px;
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
