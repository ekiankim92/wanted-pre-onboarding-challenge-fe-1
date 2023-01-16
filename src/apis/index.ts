import axios from "axios";

interface DataType {
  email: string;
  password: string;
}

interface CreateProps {
  title: string;
  content: string;
}

interface UpdateProps {
  id: string | undefined;
  title: string | undefined;
  content: string | undefined;
}

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const handleLogin = async (userInfo: DataType) => {
  const result = await instance.post("/users/login", userInfo);
  localStorage.setItem("token", result.data.token);
};

export const handleSignUp = async (userInfo: DataType) => {
  const result = await instance.post("/users/create", userInfo);
  localStorage.setItem("token", result.data.token);
};

export const createTodo = async (createInfo: CreateProps) => {
  await instance.post("/todos", createInfo);
};

export const getTodos = async () => {
  const result = await instance.get("/todos");
  return result.data?.data;
};

export const getTodoById = async (id: string | undefined) => {
  const result = await instance.get(`/todos/${id}`);
  return result.data?.data;
};

export const deleteTodo = async (id: string | undefined) => {
  await instance.delete(`/todos/${id}`);
};

export const updateTodo = async ({ id, title, content }: UpdateProps) => {
  const result = await instance.put(`/todos/${id}`, {
    title,
    content,
  });
  return result.data?.data;
};
