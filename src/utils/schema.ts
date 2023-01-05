import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required("Please correctly enter your email"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(16, "Maximum 16 characters")
    .required("Please Enter your password"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
  //   "Must Contain 8 Characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character"
  // ),
  passwordConfirm: yup
    .string()
    .required("Passwords must match")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
