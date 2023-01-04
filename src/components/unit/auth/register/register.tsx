import * as S from "./register-css";

export default function Register() {
  return (
    <S.Wrapper>
      <S.Title>Register</S.Title>
      <S.InfoWrapper>
        <S.EmailInput placeholder="Email" />
        <S.ErrorMsg>error message</S.ErrorMsg>
        <S.PasswordInput placeholder="Password" type="password" />
        <S.ErrorMsg>error message</S.ErrorMsg>
        <S.ConfirmPasswordInput
          placeholder="Confirm Password"
          type="password"
        />
        <S.ErrorMsg>error message</S.ErrorMsg>
        <S.RegisterButton>Register</S.RegisterButton>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
