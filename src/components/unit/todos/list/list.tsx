import * as S from "./list-css";
import { getTodos, deleteTodo } from "../../../../apis";
import { useQuery, useMutation, QueryClient } from "react-query";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
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
  const queryClient = new QueryClient();
  const { data } = useQuery(["todoList"], getTodos);
  const navigate = useNavigate();
  const { mutate } = useMutation(deleteTodo);

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    navigate(`/todos/${target.id}`);
  };

  const onClickDelete = (id: string | undefined) => () => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(["todoList"]);
      },
    });
  };

  return (
    <S.Wrapper>
      {data
        ?.map((el: DataType) => (
          <S.TodoListWrapper key={el.id}>
            <S.DeleteButton
              icon={faDeleteLeft}
              onClick={onClickDelete(el.id)}
              id={el.id}
            />
            <S.TitleLabel>Title: {el.title}</S.TitleLabel>
            <S.ContentLabel onClick={onClickMoveDetail} id={el.id}>
              Content: {el.content}
            </S.ContentLabel>
          </S.TodoListWrapper>
        ))
        .reverse()}
    </S.Wrapper>
  );
}
