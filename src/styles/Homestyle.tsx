import Img from "gatsby-image"
import styled from "styled-components"
import {Col, Row} from "react-bootstrap"


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
  background-color: ${props => props.theme.background}; 
  text-align: center;
  border-radius: 60px;


`

const Topic = styled.p`
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  width: auto;
  border-radius: 60px;
  background-color: ${props => props.theme.background};
  text-decoration: underline;


  ::before {
  opacity: 0.73;
  }

`
const Card = styled.div`
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
 border-radius: 10px;
  background-color: ${props => props.theme.background}; 
  text-align: center;
  

`

 const Content = styled.p`
  padding-left: 50px; 
  padding-right: 50px; 
  padding-bottom: 20px; 
  text-align: left;


 ` 

 const Table = styled.table`
  text-align: left;
  margin:  auto;
 `

 const Subtitle = styled.p`
 
    font-size: 12px;
    opacity: 0.9;
 
 `


const TR = styled(Row)`
`

const TD = styled(Col)`
`

const TableTitle = styled.p `
    font-weight: 700;
    font-size: 18px;
    white-space: nowrap;


`
export {Avatar, Header, Name, Topic, Content, Card, Table, TR,Subtitle, TD, TableTitle}