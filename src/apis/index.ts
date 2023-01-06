import axios from "axios";

interface DataType {
  email: string;
  password: string;
}

export const handleLogin = async (userInfo: DataType) => {
  try {
    const result = await axios.post(
      "http://localhost:8080/users/login",
      userInfo
    );
    localStorage.setItem("token", result.data.token);
  } catch (error) {
    if (axios.isAxiosError(error)) alert(error.response?.data.details);
  }
};

export const handleSignUp = async (userInfo: DataType) => {
  try {
    const result = await axios.post(
      "http://localhost:8080/users/create",
      userInfo
    );
    localStorage.setItem("token", result.data.token);
  } catch (error) {
    if (axios.isAxiosError(error)) alert(error.response?.data.details);
  }
};
