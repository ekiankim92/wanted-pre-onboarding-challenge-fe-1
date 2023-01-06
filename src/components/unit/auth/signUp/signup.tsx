import * as S from "./signup-css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../utils/schema";
import { handleSignUp } from "../../../../apis";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../../utils/navigation";

interface Inputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUp() {
  const { mutate } = useMutation(handleSignUp);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickRegister = async (data: Inputs) => {
    mutate(data, {
      onError: (error) => {
        console.log("error:", error);
        if (error) {
          navigate(NavigationUtil.auth);
        }
      },
      onSuccess: () => {
        navigate(NavigationUtil.auth);
      },
    });
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
              !isValid || !watch(["email", "password"]).every((el) => el)
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
