import styled from "styled-components"
import DarkMode from "../images/BackgroudImagePortfolio.svg"
import LightMode from "../images/BackgroudImagePortfolioWhite.svg"
import BackgroundImage from "gatsby-background-image"

const Body = styled.div<{ thememode: String }>`
  background-image: url(${props => props.thememode === "light" ? LightMode : DarkMode});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`

const BackgroundImageFluid = styled(BackgroundImage)`
  background-repeat: no-repeat;

  background-attachment: fixed;
`

export { Body, BackgroundImageFluid }
