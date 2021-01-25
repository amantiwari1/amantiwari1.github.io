import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme"
import { useDarkMode } from "./components/hooks/useTheme"
import Navbar from "./components/navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import BackgroundImage from "./images/BackgroudImagePortfolio.svg"
import styled from "styled-components"

const Body = styled.div`
  background-image: url(${BackgroundImage});
  min-height: 105vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={themeToggler} />
      <Body>
        <Container>{children}</Container>
      </Body>
    </ThemeProvider>
  )
}

export default Layout
