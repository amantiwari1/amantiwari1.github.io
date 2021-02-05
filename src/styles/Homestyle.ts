import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"


type Skill = {
  skillcolor: string
  skillbackground: string
}

const HomeHeader = styled.div`
        min-height: 100vh;

` 
const Avatar = styled(GatsbyImage)`
  margin: 10px;
  margin-top: 10px;
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
  backdrop-filter: blur(8px);
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
  backdrop-filter: blur(8px);

  text-decoration: underline;
`
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(8px);
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
  HomeHeader,
}
