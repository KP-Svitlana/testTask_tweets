import axios from "axios";

axios.defaults.baseURL = "https://6415d400351c4aed4910b049.mockapi.io/api/v1";

const limit = 6;

// const searchParams = new URLSearchParams({
//   limit,
// });

export const getAllUsers = (page = 1) => {
  const searchParams = new URLSearchParams({
    limit,
  });
  return axios.get(`/users?${searchParams}&page=${page}`);
};

export const getFileredUsers = (page = 1, filter) => {
  const searchParams = new URLSearchParams({
    isFollowing: filter,
    limit,
  });
  return axios.get(`/users?${searchParams}&page=${page}`);
};

export const updateUserById = (id, data) => {
  return axios.put(`/users/${id}`, data);
};
