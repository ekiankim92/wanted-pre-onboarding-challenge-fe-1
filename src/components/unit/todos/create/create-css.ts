import styled from "styled-components";

export const Wrapper = styled.div`
  width: 47.5%;
  height: 540px;
`;

export const InfoWrapper = styled.div`
  width: 340px;
  height: 340px;
  border: 1px solid #e0e0e0;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const TitleInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px;
  font-size: 16px;
`;

export const ContentText = styled.textarea`
  width: 300px;
  height: 80px;
  padding: 8px;
  font-size: 16px;
  resize: vertical;
`;

export const CreateButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 24px;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;
