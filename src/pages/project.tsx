import React from 'react';
import { ProjectStyle, Card, TitleProject, SubtitleProject, ButtonDiv, ButtonView } from "../styles/ProjectStye";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image"





function project() {
  const data = useStaticQuery(graphql`
      {
  allFile(filter: {relativeDirectory: {eq: "Project"}}) {
    nodes {
      fields {
        subtitle
        title
        urlarray {
          link
          name
        }
      }
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: COVER, cropFocus: CENTER}, width: 800, height: 500)
      }
    }
  }
}


  `)
  return (
    <ProjectStyle>
      {
        data.allFile.nodes.map((data: any) => (
          <>
            <Card xs={12}>
              <Row>
                <Col style={{ padding: "0" }} xs={12} md={5} >
                <GatsbyImage image={data.childImageSharp.gatsbyImageData} alt={data.fields.title} />
                </Col>
                <Col xs={12} md={7}>
                  <>
                    <TitleProject>
                      {data.title}
                    </TitleProject>
                        <SubtitleProject >{data.fields.subtitle}</SubtitleProject>
                    <ButtonDiv>
                      {
                        data.fields.urlarray.map((data: any) => (
                          <ButtonView key={data.name} target="_blank" rel="noopener noreferrer" href={data.link}>
                            {data.name}
                          </ButtonView>
                        ))
                      }
                    </ButtonDiv>
                  </>
                </Col>
              </Row>
            </Card>
          </>
        ))
      }
    </ProjectStyle>
  );
}

export default project;