import styled from "styled-components"
import { Row, Col } from "react-bootstrap"




const ProjectStyle = styled(Row)`
   padding: 20px;
`


const Card = styled(Col)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  margin-top: 20px;
  height: 100%;
  width: 100%;
`

const TitleProject = styled.p`
          font-size: 35px;
          font-weight: 700;

`

const SubtitleProject = styled.p`
      opacity: 0.9;
`


const ButtonView = styled.a`
    margin: 15px;
    margin-top: 20px;
    padding: 15px;
    border: 2px ${props => props.theme.text} solid;
    border-radius: 20px;
    text-decoration: none;

    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.text};
      transition: all 0.3s ease;

  
    &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.mainColor};
  }
`

const ButtonDiv = styled.p`
      padding: 20px;
      text-align: right;
`

const ProjectTopic = styled.h1`
 text-align: center;

`










export {SubtitleProject, TitleProject,  ProjectStyle, ButtonView, ButtonDiv, Card, ProjectTopic }
