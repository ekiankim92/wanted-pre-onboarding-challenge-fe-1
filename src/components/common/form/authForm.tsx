import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../utils/schema";

export default function AuthForm() {
  const { handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = () => {
    alert("testing");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>This is Authform</div>
      <button>Click</button>
    </form>
  );
}
