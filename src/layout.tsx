import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme"
import { useDarkMode } from "./components/hooks/useTheme"
import Navbar from "./components/navbar"
import { Container } from "react-bootstrap"
import { Body, BackgroundImageFluid } from "./styles/LayoutStyle"
import { graphql, useStaticQuery } from "gatsby"
import Footer  from "./components/footer";
import backgroundImagesvg from "./images/backgroundImagesvg";

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(
    graphql`
      query {
        dark: file(relativePath: { eq: "DarkModeBackground.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        light: file(relativePath: { eq: "LightModeBackground.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const dark = data.dark.childImageSharp.fluid
  const light = data.light.childImageSharp.fluid

  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={themeToggler} />
      {/* <BackgroundImageFluid fluid={theme === "light" ? dark : light}> */}
        <Body thememode={theme}>
        <Container>{children}</Container>
        </Body>
      {/* </BackgroundImageFluid> */}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
