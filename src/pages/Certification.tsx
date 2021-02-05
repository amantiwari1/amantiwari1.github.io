import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Col, Row } from "react-bootstrap"
import { ButtonView, ButtonDiv } from "../styles/ProjectStye";



import { CertificationCardDiv, CertificationCardStyle } from "../styles/CertificationStyle";

const Certification = () => {
    const data = useStaticQuery(graphql`
        {
  allFile(filter: {relativeDirectory: {eq: "Certification"}}) {
    nodes {
        name
      fields {
        title
        url
      }
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: COVER, cropFocus: CENTER}, width: 800, height: 500)
      }
    }
  }
}
    `)
    return (
        <CertificationCardDiv>
            {
                data.allFile.nodes.map((data: any) => (
                    <Col style={{padding: "10px"}} xs={12} md={6} lg={4}>
                        <CertificationCardStyle  >
                            <Row >
                                <Col lg={12}>
                                    <GatsbyImage image={data.childImageSharp.gatsbyImageData} alt={data.fields.title} />
                                </Col>
                                <Col lg={12} >
                                    <h5>{data.fields.title}</h5>
                                    <ButtonDiv>
                                        <ButtonView target="_blank" rel="noopener noreferrer" href={data.fields.url} download={data.name}>
                                            View
                                        </ButtonView>
                                    </ButtonDiv>
                                </Col>
                            </Row>
                        </CertificationCardStyle>
                    </Col>
                ))
            }
        </CertificationCardDiv>
    )
}

export default Certification
