import * as S from "./list-css";
import { getTodos } from "../../../../apis";
import { useQuery } from "react-query";
import { faPenToSquare, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { MouseEvent } from "react";

interface DataType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export default function TodosList() {
  const { data }: any = useQuery("todoList", getTodos);
  const navigate = useNavigate();

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    navigate(`/todos/${event.currentTarget.id}`);
  };

  return (
    <S.Wrapper>
      {data?.map((el: DataType) => (
        <S.TodoListWrapper key={el.id} onClick={onClickMoveDetail} id={el.id}>
          <S.EditButton icon={faPenToSquare} />
          <S.DeleteButton icon={faDeleteLeft} />
          <S.TitleLabel>Title: {el.title}</S.TitleLabel>
          <S.ContentLabel>Content: {el.content}</S.ContentLabel>
        </S.TodoListWrapper>
      ))}
    </S.Wrapper>
  );
}
