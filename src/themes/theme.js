import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    mainColor: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
}
export const darkTheme = {
    mainColor: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
}

export const GlobalStyles  = createGlobalStyle`

* {
    padding: 0;
    margin: 0;

}
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
body {
  min-height: 100vh;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.text};
  scrollbar-width: thin;
  scrollbar-color: #e76f51 #1d3557;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: #1d3557;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e76f51;
    border-radius: 14px;
    border: 3px solid #1d3557;
  }
}
`
