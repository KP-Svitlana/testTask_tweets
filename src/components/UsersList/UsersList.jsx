import { StyledUsersList } from "./UsersList.styled";
import { UserCard } from "../UserCard";

export const UsersList = ({ data }) => {
  return (
    <StyledUsersList>
      {data.map(({ id, avatar, followers, tweets, isFollowing }) => {
        return (
          <UserCard
            key={id}
            id={id}
            avatar={avatar}
            followers={followers}
            tweets={tweets}
            isFollowing={isFollowing}
          />
        );
      })}
    </StyledUsersList>
  );
};
