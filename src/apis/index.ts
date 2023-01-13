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
  },
});

const token =
  "eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I";

export const handleLogin = async (userInfo: DataType) => {
  const result = await instance.post("/users/login", userInfo);
  localStorage.setItem("token", result.data.token);
};

export const handleSignUp = async (userInfo: DataType) => {
  const result = await instance.post("/users/create", userInfo);
  localStorage.setItem("token", result.data.token);
};

export const createTodo = async (createInfo: CreateProps) => {
  await instance.post("/todos", createInfo, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getTodos = async () => {
  const result = await instance.get("/todos", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data?.data;
};

export const getTodoById = async (id: string | undefined) => {
  const result = await instance.get(`/todos/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data?.data;
};

export const deleteTodo = async (id: string | undefined) => {
  await instance.delete(`/todos/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateTodo = async ({ id, title, content }: UpdateProps) => {
  const result = await instance.put(
    `/todos/${id}`,
    {
      title,
      content,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data?.data;
};
