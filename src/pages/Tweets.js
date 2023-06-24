import { UsersList } from "../components/UsersList";
import { ExtraBtn } from "../components/Button";
import { Section } from "../components/Section";

const Tweets = () => {
  return (
    <Section>
      <UsersList />
      <ExtraBtn text={"Load More"} isActive={true} />
    </Section>
  );
};

export default Tweets;
