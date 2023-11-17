const { BACKEND_URL } = require("@/utils/constant");
const { default: axios } = require("axios");

const API = {
  login: async (email, password) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/login`, {
        email,
        password,
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  },
  register: async (email, password, name) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/register`, {
        email,
        password,
        name,
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  },
};

module.exports = API;
