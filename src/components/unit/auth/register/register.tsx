import * as S from "./register-css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../utils/schema";

type Inputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickRegister = () => {
    alert("register");
  };

  return (
    <form onSubmit={handleSubmit(onClickRegister)}>
      <S.Wrapper>
        <S.Title>Register</S.Title>
        <S.InfoWrapper>
          <S.EmailInput placeholder="Email" {...register("email")} />
          <S.ErrorMsg>{errors.email?.message}</S.ErrorMsg>
          <S.PasswordInput
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <S.ErrorMsg>{errors.password?.message}</S.ErrorMsg>
          <S.ConfirmPasswordInput
            placeholder="Confirm Password"
            type="password"
            {...register("passwordConfirm")}
          />
          <S.ErrorMsg>{errors.passwordConfirm?.message}</S.ErrorMsg>
          <S.RegisterButton
            disabled={
              !isValid ||
              !watch(["email", "password", "passwordConfirm"]).every((el) => el)
            }
            isValid={isValid}
          >
            Register
          </S.RegisterButton>
        </S.InfoWrapper>
      </S.Wrapper>
    </form>
  );
}
