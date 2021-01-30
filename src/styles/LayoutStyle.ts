import styled from "styled-components"

interface BodyInterface {
  thememode: any;
  LightMode: any;
  DarkMode: any;
}

const Body = styled.div<BodyInterface>`
  background-image: url(${props => props.thememode === "light" ? props.LightMode : props.DarkMode});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 85.5vh;


 @media (max-width: 760px) {
   background-image: none;
   background-color: ${props => props.theme.mainColor}
 }
`



export { Body }
