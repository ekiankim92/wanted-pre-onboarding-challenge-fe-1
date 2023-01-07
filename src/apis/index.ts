import axios from "axios";

interface DataType {
  email: string;
  password: string;
}

interface CreateProps {
  title: string;
  content: string;
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

export const createTodo = async (createInfo: CreateProps) => {
  await axios.post("http://localhost:8080/todos", createInfo, {
    headers: {
      // authorization: `Bearer ${token}`,
      authorization: `eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
    },
  });
};
