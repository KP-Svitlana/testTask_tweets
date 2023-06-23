import { useState, useEffect } from "react";
import { StyledUsersList } from "./UsersList.styled";
import { UserCard } from "../UserCard";

import { getAllUsers } from "../../API/API";

export const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function fetchUsersList() {
      const response = await getAllUsers().then((result) => result.data);
      setUsersList(response);
    }
    fetchUsersList();
  }, []);

  return (
    <StyledUsersList>
      {usersList.map(({ id, avatar, followers, tweets, isFollowing }) => {
        return (
          <UserCard
            key={id}
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
