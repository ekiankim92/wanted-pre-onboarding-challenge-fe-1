import styled from "styled-components";
import CreateTodos from "./create/create";
import TodosList from "./list/list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ArrowWrapper = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
`;

export default function Todos() {
  return (
    <Wrapper>
      <CreateTodos />
      <ArrowWrapper>
        <ArrowIcon icon={faCircleArrowRight} />
      </ArrowWrapper>
      <TodosList />
    </Wrapper>
  );
}
