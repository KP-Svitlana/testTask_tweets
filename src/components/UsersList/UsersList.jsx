import { StyledUsersList } from "./UsersList.styled";
import { UserCard } from "../UserCard/UserCard";

export const UsersList = ({ isActive }) => {
  return (
    <StyledUsersList>
      <UserCard isActive={isActive} />
      <UserCard isActive={isActive} />
      <UserCard isActive={isActive} />
    </StyledUsersList>
  );
};
