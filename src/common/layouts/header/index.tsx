import styled from "styled-components";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../utils/navigation";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, #ffafbd -3.4%, #ffc3a0 100%);
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  width: 85%;
  padding-left: 32px;
`;

const ButtonWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LoginLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const LogoutLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const onClickAuthPage = () => {
    navigate(NavigationUtil.auth);
  };

  return (
    <Wrapper>
      <Title>2Do</Title>
      <ButtonWrapper>
        <LoginLabel onClick={onClickAuthPage}>로그인</LoginLabel>
        <LogoutLabel>로그아웃</LogoutLabel>
      </ButtonWrapper>
    </Wrapper>
  );
}
