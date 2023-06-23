import axios from "axios";

axios.defaults.baseURL = "https://6415d400351c4aed4910b049.mockapi.io/api/v1";

export const getAllUsers = () => {
  return axios.get("/users");
};

export const getUserbyId = (id) => {
  return axios.get(`/users/${id}`);
};

export const updateUserById = (id, data) => {
  return axios.put(`/users/${id}`, data);
};
