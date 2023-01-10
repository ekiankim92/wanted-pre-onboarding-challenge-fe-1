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
      authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
    },
  });
};

export const getTodos = async () => {
  const result = await axios.get("http://localhost:8080/todos", {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
    },
  });
  return result.data?.data;
};

export const getTodoById = async (id: string | undefined) => {
  const result = await axios.get(`http://localhost:8080/todos/${id}`, {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
    },
  });
  return result.data?.data;
};

export const deleteTodo = async (id: string | undefined) => {
  await axios.delete(`http://localhost:8080/todos/${id}`, {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
    },
  });
};

// export const updateTodo =
//   async (id: string | undefined) => async (updateInfo: UpdateProps) => {
//     const result = await axios.put(
//       `http://localhost:8080/todos/${id}`,
//       updateInfo,
//       {
//         headers: {
//           authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
//         },
//       }
//     );
//     console.log("result:", result);
//     console.log("updateInfo:", updateInfo);
//   };

export const updateTodo =
  async (id: any) => async (title: any, content: any) => {
    const result = await axios.put(
      `http://localhost:8080/todos/${id}`,
      {
        title,
        content,
      },
      {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
        },
      }
    );
    console.log("result:", result);
    console.log("updateInfo:", title, content);
  };
