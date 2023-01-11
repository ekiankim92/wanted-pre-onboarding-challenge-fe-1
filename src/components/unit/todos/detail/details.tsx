import * as S from "./detail-css";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { getTodoById, updateTodo } from "../../../../apis";
import { useNavigate } from "react-router";
import { faLeftLong, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { NavigationUtil } from "../../../../utils/navigation";

interface IdProps {
  id?: string | undefined;
}

export default function TodoDetail() {
  const navigate = useNavigate();
  const { id }: IdProps = useParams();
  const { data }: any = useQuery(["todoDetail", id], () => getTodoById(id));
  const { mutate } = useMutation(updateTodo);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const onClickPrevPage = () => {
    navigate(-1);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeInputs =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs({
        ...inputs,
        [name]: event.target.value,
      });
    };

  const onClickEdit = (id: string | undefined) => async () => {
    const { title, content } = inputs;
    mutate(
      { id, title, content },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          navigate(NavigationUtil.todos);
        },
      }
    );
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.BackIcon icon={faLeftLong} onClick={onClickPrevPage} />
        <S.Title>Detail</S.Title>
        <S.EditIcon icon={faPenToSquare} onClick={showModal} />
      </S.TitleWrapper>
      <S.Date>{data?.createdAt.slice(0, 10)}</S.Date>
      <S.TitleLabel>
        <S.Span className="spanTitle">Title:</S.Span>
        {data?.title}
      </S.TitleLabel>
      <S.ContentLabel>
        <S.Span>Content:</S.Span>
        {data?.content}
      </S.ContentLabel>
      <S.Modals
        title="Detail Edit"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <S.EditButton key="submit" onClick={onClickEdit(id)}>
            Edit
          </S.EditButton>,
        ]}
      >
        <S.InputsWrapper>
          <S.ModalTitleLabel>Title:</S.ModalTitleLabel>
          <S.TitleInput
            defaultValue={data?.title || inputs.title}
            onChange={onChangeInputs("title")}
          />
          <S.ModalTitleLabel>Content:</S.ModalTitleLabel>
          <S.ContentInput
            defaultValue={data?.content || inputs.content}
            onChange={onChangeInputs("content")}
          />
        </S.InputsWrapper>
      </S.Modals>
    </S.Wrapper>
  );
}
