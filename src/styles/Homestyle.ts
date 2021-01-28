import Img from "gatsby-image"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"

type Skill = {
  skillcolor: string
  skillbackground: string
}

interface ImageFixed {
  fixed: any;
}

const Avatar = styled(Img)<ImageFixed>`
  margin: 10px;
  margin-top: 80px;
  border-radius: 50%;
  border: 8px ${props => props.theme.text} solid;
`

const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
  background-color: ${props => props.theme.mainColor};
  text-align: center;
  border-radius: 60px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

`

const Topic = styled.p`
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  width: auto;
  border-radius: 60px;
  background-color: ${props => props.theme.mainColor};
  text-decoration: underline;
`
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: ${props => props.theme.mainColor};
  text-align: center;
`

const Content = styled.div`
  margin: 10px;
  `

const Table = styled.div`
  margin: auto;
`

const Subtitle = styled.p`
  font-size: 12px;
  opacity: 0.9;
`

const TR = styled(Row)``

const TD = styled(Col)``

const TableTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  white-space: nowrap;
`

const Skillname = styled.p<Skill>`
  background-color: ${props => props.skillbackground};
  color: ${props => props.skillcolor};
  padding: 5px;
  margin: 5px;
  border-radius: 70px;
  display: inline-block;
  font-size: inherit;
`
export {
  Skillname,
  Avatar,
  Header,
  Name,
  Topic,
  Content,
  Card,
  Table,
  TR,
  Subtitle,
  TD,
  TableTitle,
}
