import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTodoById } from "../../../../apis";

interface IdProps {
  id?: string | undefined;
}

export default function TodoDetail() {
  const { id }: IdProps = useParams();
  const { data }: any = useQuery(["todoDetail", id], () => getTodoById(id));

  return (
    <>
      <h2>This is detail page!</h2>
      <div>{data?.createdAt}</div>
      <div>{data?.title}</div>
      <div>{data?.content}</div>
    </>
  );
}
