import styled from "styled-components"
import { Row, Col } from "react-bootstrap"
import React from "react"
import Img from "gatsby-image";



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


interface ProjectCardProps {
  fluid: any;
  data: {
    title: string;
    subtitle: string[];
    button: {
      name: string;
      url: string;
    }[];
  };

}




const ProjectCard = ({ fluid, data }: ProjectCardProps) => (

  <Card xs={12}>
    <Row>
      <Col style={{ padding: "0" }} xs={12} md={5} >
        <Img fluid={fluid} />
      </Col>
      <Col xs={12} md={7}>
        <>
          <TitleProject>
            {data.title}
          </TitleProject>
          {
            data.subtitle.map(data => (
              <SubtitleProject key={data}>{data}</SubtitleProject>
            ))}
          <ButtonDiv>
            {
              data.button.map(data => (
                <ButtonView key={data.name} target="_blank" rel="noopener noreferrer" href={data.url}>
                  {data.name}
                </ButtonView>
              ))
            }
          </ButtonDiv>
        </>
      </Col>
    </Row>
  </Card>
)



export {SubtitleProject, TitleProject,  ProjectStyle, ButtonView, ButtonDiv, ProjectCard, Card }
