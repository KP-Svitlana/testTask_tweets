import { Section } from 'components/Section';
import {
  StyledAfterTitle,
  StyledTitle,
  StyledtextTitle,
  StyledtextText,
  StyledtextSpan,
} from './Description.styled';

export const Description = () => {
  return (
    <Section>
      <StyledTitle>Welcome to Tweets!</StyledTitle>
      <StyledAfterTitle>This is a GoIT test task.</StyledAfterTitle>
      <StyledtextTitle>
        Implementation of the project:
        <StyledtextText>
          The project was compiled with{' '}
          <StyledtextSpan>create-react-app</StyledtextSpan>.
        </StyledtextText>
        <StyledtextText>
          Components are created using the react components.
        </StyledtextText>
        <StyledtextText>
          Used as backend <StyledtextSpan>mockapi.io</StyledtextSpan>.
        </StyledtextText>
        <StyledtextText>
          State management libraries were not used.
        </StyledtextText>
      </StyledtextTitle>

      <StyledtextTitle>
        Tech Stack:
        <StyledtextText>Java Script</StyledtextText>
        <StyledtextText>React</StyledtextText>
        <StyledtextText>Emotion/styled</StyledtextText>
        <StyledtextText>Axios</StyledtextText>
      </StyledtextTitle>
    </Section>
  );
};
