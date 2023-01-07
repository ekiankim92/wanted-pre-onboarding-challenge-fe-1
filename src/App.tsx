import { GlobalStyles } from "./common/styles/globalStyles";
import Layout from "./common/layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavigationUtil } from "./utils/navigation";
import AuthPage from "./pages/auth";
import SignUpPage from "./pages/signUp";
import TodosPage from "./pages/todos";
import { QueryClient, QueryClientProvider } from "react-query";
import { createContext } from "react";

export const GlobalContext = createContext({});

function App() {
  const queryClient = new QueryClient();

  const myValue = {
    token: "",
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        <QueryClientProvider client={queryClient}>
          <GlobalContext.Provider value={myValue}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/auth" />} />
              <Route path={NavigationUtil.auth} element={<AuthPage />} />
              <Route path={NavigationUtil.register} element={<SignUpPage />} />
              <Route path={NavigationUtil.todos} element={<TodosPage />} />
            </Routes>
          </GlobalContext.Provider>
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default App;
