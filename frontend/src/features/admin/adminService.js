import axios from "axios";

const API_URL = "api/admin/";
const API_DELETE = "/api/admin/deleteuser/";

const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};



//Delete user
const deleteUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_DELETE + userId, config);

  return response.data;
};

const adminService = {
  getUsers,
  
  deleteUser,
};

export default adminService;
