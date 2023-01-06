import axios from "axios";

interface DataType {
  email: string;
  password: string;
}

export const handleLogin = async (userInfo: DataType) => {
  const result = await axios.post(
    "http://localhost:8080/users/login",
    userInfo
  );
  localStorage.setItem("token", result.data.token);
};

export const handleSignUp = async (userInfo: DataType) => {
  const result = await axios.post(
    "http://localhost:8080/users/create",
    userInfo
  );
  localStorage.setItem("token", result.data.token);
};
