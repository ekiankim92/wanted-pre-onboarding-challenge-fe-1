import * as S from "./list-css";
import { getTodos } from "../../../../apis";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

interface DataType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export default function TodosList() {
  const { data }: any = useQuery("todoList", getTodos);

  return (
    <S.Wrapper>
      {data?.map((el: DataType) => (
        <S.TodoListWrapper key={el.id}>
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faDeleteLeft} />
          <div>Title: {el.title}</div>
          <div>Content: {el.content}</div>
        </S.TodoListWrapper>
      ))}
    </S.Wrapper>
  );
}
