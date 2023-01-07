import { ChangeEvent, useState } from "react";
import * as S from "./create-css";
import { createTodo } from "../../../../apis";
import { useMutation } from "react-query";

export default function CreateTodos() {
  const { mutate } = useMutation(createTodo);

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickCreate = () => {
    mutate({ ...inputs });
  };

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <h2>Add your to-do list </h2>
        <label>Title</label>
        <S.TitleInput onChange={onChangeInputs} name="title" />
        <label>Content</label>
        <S.ContentText onChange={onChangeInputs} name="content" />
        <S.CreateButton onClick={onClickCreate}>Create</S.CreateButton>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
