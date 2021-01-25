import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme"
import { useDarkMode } from "./components/hooks/useTheme"
import Navbar from "./components/navbar"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";





const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={themeToggler} />
        <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Layout
