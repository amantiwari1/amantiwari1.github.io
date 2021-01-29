import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme"
import { useDarkMode } from "./components/hooks/useTheme"
import Navbar from "./components/navbar"
import { Container } from "react-bootstrap"
import { Body } from "./styles/LayoutStyle"
import Footer from "./components/footer";
import { useStaticQuery, graphql } from "gatsby";

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const Layout = ({ children }: LayoutProps) => {

  const data = useStaticQuery(graphql`
  
      query ImageQuery {
        DarkMode : file(relativePath: {eq: "BackgroudImagePortfolio.svg"}) {
          publicURL
  }
      
        LightMode : file(relativePath: {eq: "BackgroudImagePortfolioWhite.svg"}) {
          publicURL
  }
      }

      
  
  
  `)


  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={themeToggler} />
      <Body DarkMode={data.DarkMode.publicURL} LightMode={data.LightMode.publicURL} thememode={theme}>

        <Container><div style={{ marginTop: "60px" }}></div>{children}</Container>
      </Body>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
