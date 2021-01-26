import styled from "styled-components"
import DarkMode from "../images/BackgroudImagePortfolio.svg"
import LightMode from "../images/BackgroudImagePortfolioWhite.svg"


const Body = styled.div<{ thememode: String  }>`
  background-image: url(${props => props.thememode === "light" ? LightMode : DarkMode});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;

`

export { Body}