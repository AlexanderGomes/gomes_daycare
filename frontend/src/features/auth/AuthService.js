import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/sign-up", userData);

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("/sign-in", userData);

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("jwt");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
