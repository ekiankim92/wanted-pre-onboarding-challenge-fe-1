import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #e0e0e0;
  margin: 80px auto;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const EmailInput = styled.input`
  width: 320px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  padding: 8px;
  font-size: 16px;
  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const PasswordInput = styled.input`
  width: 320px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  padding: 8px;
  font-size: 16px;
  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const LoginButton = styled.button`
  color: #fff;
  width: 320px;
  height: 40px;
  border-radius: 24px;
  border: none;
  background: ${(props: Props) =>
    !props.isActive
      ? "#efefef"
      : "linear-gradient(90deg, #ffafbd -3.4%, #ffc3a0 100%)"};
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export const Member = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const SignSpan = styled.span`
  color: #ffafbd;
  padding-left: 4px;
  :hover {
    cursor: pointer;
  }
`;
