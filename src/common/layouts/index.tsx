import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div``;

const Body = styled.div``;

export default function Layout(props: LayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
