import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme"
import { useDarkMode } from "./components/hooks/useTheme"
import Navbar from "./components/navbar"
import { Container } from "react-bootstrap"
import { Body } from "./styles/LayoutStyle";



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
