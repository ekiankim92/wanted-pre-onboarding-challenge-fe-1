import * as S from "./auth-css";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../utils/navigation";

export default function Auth() {
  const navigate = useNavigate();

  const onClickRegister = () => {
    navigate(NavigationUtil.register);
  };

  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>
      <S.InfoWrapper>
        <S.EmailInput placeholder="Email" />
        <S.PasswordInput placeholder="Password" type="password" />
        <S.LoginButton>Login</S.LoginButton>
        <S.Member>
          Not a member?
          <S.SignSpan onClick={onClickRegister}>Signup</S.SignSpan>
        </S.Member>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
