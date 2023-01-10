import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 47.5%;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin-top: 30px;
`;

export const TodoListWrapper = styled.div`
  border: 1px solid #000;
  width: 320px;
  margin: 10px;
`;

export const EditButton = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const DeleteButton = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const TitleLabel = styled.div`
  font-size: 20px;
`;

export const ContentLabel = styled.div`
  font-size: 20px;
  :hover {
    font-weight: 700;
    cursor: pointer;
    opacity: 0.5;
  }
`;
