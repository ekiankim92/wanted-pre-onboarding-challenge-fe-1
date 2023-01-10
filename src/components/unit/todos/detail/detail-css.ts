import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #000;
  margin: 40px auto;
  border-radius: 8px;
`;

export const TitleWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const BackIcon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  padding-left: 20px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
export const EditIcon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  padding-right: 20px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const Date = styled.div`
  opacity: 0.5;
  height: 40px;
  text-align: center;
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 22px;
  padding-right: 10px;
`;

export const TitleLabel = styled.div`
  font-size: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const ContentLabel = styled.div`
  font-size: 18px;
  height: 120px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const Modals = styled(Modal)``;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitleLabel = styled.label`
  font-size: 18px;
`;

export const ModalContentLabel = styled.label`
  font-size: 18px;
`;

export const TitleInput = styled.input`
  width: 420px;
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
`;

export const ContentInput = styled.input`
  width: 420px;
  height: 120px;
  text-overflow: ellipsis;
  padding-left: 10px;
  font-size: 18px;
`;

export const EditButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 24px;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;
