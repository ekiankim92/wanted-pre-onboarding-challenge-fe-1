import { GlobalStyles } from "./common/styles/globalStyles";
import Layout from "./common/layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavigationUtil } from "./utils/navigation";
import AuthPage from "./pages/auth";
import SignUpPage from "./pages/signUp";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/auth" />} />
          <Route path={NavigationUtil.auth} element={<AuthPage />} />
          <Route path={NavigationUtil.register} element={<SignUpPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
