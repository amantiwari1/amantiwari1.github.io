import styled from "styled-components"

interface BodyInterface {
  thememode: any;
  LightMode: any;
  DarkMode: any;
}

const Body = styled.div<BodyInterface>`
  background-image: url(${props => props.LightMode});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 85.5vh;

   background-color: ${props => props.theme.mainColor};

 @media (max-width: 760px) {
   background-image: none;
 }
`



export { Body }
