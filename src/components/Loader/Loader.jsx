import { ThreeCircles } from 'react-loader-spinner';
import { StyledLoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoaderWrap>
      <ThreeCircles
        height="100"
        width="100"
        color="#471CA9"
        visible={true}
        wrapperStyle={{}}
        wrapperClass=""
        ariaLabel="three-circles-rotating"
        outerCircleColor="#471CA9"
        innerCircleColor="#471CA9"
        middleCircleColor="#471CA9"
      />
    </StyledLoaderWrap>
  );
};
