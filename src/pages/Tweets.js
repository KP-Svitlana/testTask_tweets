import { useEffect, useState } from 'react';

import { UsersList } from 'components/UsersList';
import { ExtraBtn } from 'components/Button';
import { Section } from 'components/Section';
import { Filter } from 'components/Filter';

import {
  getAllUsers,
  getFileredUsers,
  getUsers,
  getAllFileredUsers,
} from 'API';

const Tweets = () => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(localStorage.getItem('filter'));
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState('false');

  useEffect(() => {
    if (filter === 'follow') {
      async function fetchFilteredUsersList() {
        const response = await getFileredUsers(page, false).then(
          result => result.data
        );
        const totalUsers = await getAllFileredUsers(false).then(
          result => result.data
        );
        setIsLoadMoreBtnVisible(page < Math.ceil(totalUsers.length / 6));
        setUsersList([...usersList, ...response]);
      }
      fetchFilteredUsersList();
    } else if (filter === 'following') {
      async function fetchFilteredUsersList() {
        const response = await getFileredUsers(page, true).then(
          result => result.data
        );
        const totalUsers = await getAllFileredUsers(true).then(
          result => result.data
        );
        setIsLoadMoreBtnVisible(page < Math.ceil(totalUsers.length / 6));
        setUsersList([...usersList, ...response]);
      }
      fetchFilteredUsersList();
    } else {
      async function fetchUsersList() {
        const response = await getAllUsers(page).then(result => result.data);
        const totalUsers = await getUsers().then(result => result.data);
        setIsLoadMoreBtnVisible(page < Math.ceil(totalUsers.length / 6));
        setUsersList([...usersList, ...response]);
      }
      fetchUsersList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page]);

  function onLoadMoreBtnClick() {
    setPage(page + 1);
  }

  function onFilterSelect(value) {
    setUsersList([]);
    setPage(1);
    setFilter(value);
  }

  return (
    <Section>
      <Filter onChange={onFilterSelect} />
      <UsersList data={usersList} />
      {isLoadMoreBtnVisible && (
        <ExtraBtn
          text={'Load More'}
          isActive={true}
          onClick={onLoadMoreBtnClick}
        />
      )}
    </Section>
  );
};

export default Tweets;
