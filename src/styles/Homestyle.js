import Img from "gatsby-image"
import styled from "styled-components"


const Avatar = styled(Img)`
  margin: 10px;
  border-radius: 50%;
  border: 8px ${props => props.theme.text} solid;
`

const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  font-family: Comic Sans MS;

`

const Topic = styled.p`
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
  font-family: Comic Sans MS;
  text-align: center;
`

export {Avatar, Header, Name, Topic}