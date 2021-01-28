import { createGlobalStyle } from "styled-components"
import { DefaultTheme } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string
    text: string
    laptop: string
    background: string
  }
}

export const lightTheme: DefaultTheme = {
  mainColor: "#FFF",
  text: "#363537",
  laptop: "#f8f9fa",
  background: "#f2e9e4",
}
export const darkTheme: DefaultTheme = {
  mainColor: "#363537",
  text: "#FAFAFA",
  background: "#999",
  laptop: "#22223b",
}

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
  padding: 0;
  box-sizing: border-box;

}


html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
body {

  --scroll-bar: ${props => props.theme.mainColor};
  --scroll-bar-background: ${props => props.theme.text};

  font-family: Comic Sans MS;
  color: ${props => props.theme.text};
  scrollbar-width: thin;
  scrollbar-color: var(--scroll-bar-background) var(--scroll-bar);
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: var(--scroll-bar);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-background);
    border-radius: 14px;
    border: 3px solid var(--scroll-bar);
  }
}
`
