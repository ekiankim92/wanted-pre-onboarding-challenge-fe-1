import { createGlobalStyle } from "styled-components";
import { breakPoints } from "./media";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Noto+Sans&family=Noto+Sans+KR&family=Roboto&display=swap");

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Noto Sans", "Noto Sans KR", "Roboto", sans-serif;
    @media ${breakPoints.mobile} {
      overflow-x: hidden;
      touch-action: pan-y;
    }
  }
`;
