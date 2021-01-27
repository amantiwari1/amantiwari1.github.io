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
  min-height: 100vh;
`



export { Body }
