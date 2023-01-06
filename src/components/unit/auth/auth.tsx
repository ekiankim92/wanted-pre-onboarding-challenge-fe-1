import * as S from "./auth-css";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../utils/navigation";
import { ChangeEvent, useState } from "react";
import { handleLogin } from "../../../apis";
import { useMutation } from "react-query";

export default function Auth() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [isActive, setIsActive] = useState(false);

  const { mutate } = useMutation(handleLogin);

  const navigate = useNavigate();

  const onChangeInputs =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const { email, password } = inputs;

      if (email && password) {
        setIsActive(true);
      }

      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    };

  const onClickRegister = () => {
    navigate(NavigationUtil.register);
  };

  const onClickLogin = () => {
    mutate({ ...inputs });
  };

  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>
      <S.InfoWrapper>
        <S.EmailInput placeholder="Email" onChange={onChangeInputs("email")} />
        <S.PasswordInput
          placeholder="Password"
          type="password"
          onChange={onChangeInputs("password")}
        />
        <S.LoginButton
          onClick={onClickLogin}
          disabled={!isActive}
          isActive={isActive}
        >
          Login
        </S.LoginButton>
        <S.Member>
          Not a member?
          <S.SignSpan onClick={onClickRegister}>Signup</S.SignSpan>
        </S.Member>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
