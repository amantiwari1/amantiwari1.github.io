import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme"
import { useDarkMode } from "./components/hooks/useTheme"
import Navbar from "./components/navbar"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={themeToggler} />
      <Container>
        <div></div>
        <main>{children}</main>
        <div></div>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
