import styled from "styled-components";
import CreateTodos from "./create/create";
import TodosList from "./list/list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";

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
  :hover {
    cursor: pointer;
  }
`;

export default function Todos() {
  const [isSwitch, setIsSwitch] = useState<boolean>(false);

  const onClickArrow = useCallback(() => {
    setIsSwitch((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      {isSwitch ? (
        <>
          <TodosList />
          <ArrowWrapper>
            <ArrowIcon icon={faArrowRightArrowLeft} onClick={onClickArrow} />
          </ArrowWrapper>
          <CreateTodos />
        </>
      ) : (
        <>
          <CreateTodos />
          <ArrowWrapper>
            <ArrowIcon icon={faArrowRightArrowLeft} onClick={onClickArrow} />
          </ArrowWrapper>
          <TodosList />
        </>
      )}
    </Wrapper>
  );
}
