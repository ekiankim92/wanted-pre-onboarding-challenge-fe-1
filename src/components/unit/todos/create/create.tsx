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

  const onChangeInputs =
    (name: string) =>
    (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      setInputs({
        ...inputs,
        [name]: event.target.value,
      });
    };

  const onClickCreate = () => {
    const { title, content } = inputs;

    if (!title || !content || title.length <= 2 || content.length <= 5)
      return alert("Please enter the information correctly");

    mutate(
      { ...inputs },
      {
        onSuccess: () => {
          alert("Successfully added");
        },
      }
    );

    setInputs({
      title: "",
      content: "",
    });
  };

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <h2>Add your to-do list </h2>
        <label>Title</label>
        <S.TitleInput onChange={onChangeInputs("title")} value={inputs.title} />
        <label>Content</label>
        <S.ContentText
          onChange={onChangeInputs("content")}
          value={inputs.content}
        />
        <S.CreateButton onClick={onClickCreate}>Create</S.CreateButton>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
