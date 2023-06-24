import { UsersList } from "../components/UsersList";
import { ExtraBtn } from "../components/Button";

const Tweets = () => {
  return (
    <>
      <UsersList />
      <ExtraBtn text={"Load More"} isActive={true} />
    </>
  );
};

export default Tweets;
