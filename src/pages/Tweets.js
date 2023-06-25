import { useEffect, useState } from "react";

import { UsersList } from "../components/UsersList";
import { ExtraBtn } from "../components/Button";
import { Section } from "../components/Section";
import { Filter } from "../components/Filter";

import { getAllUsers } from "../API/API";

const Tweets = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchUsersList() {
      const response = await getAllUsers(page).then((result) => result.data);

      setUsersList([...usersList, ...response]);
    }
    fetchUsersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function onLoadMoreBtnClick() {
    setPage(page + 1);
  }

  return (
    <Section>
      <Filter />
      <UsersList data={usersList} />
      <ExtraBtn
        text={"Load More"}
        isActive={true}
        onClick={onLoadMoreBtnClick}
      />
    </Section>
  );
};

export default Tweets;
