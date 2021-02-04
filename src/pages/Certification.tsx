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
        downloadurl
      }
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}
    `)
    return (
        <CertificationCardDiv>
            {
                data.allFile.nodes.map((data: any) => (
                    <Col xs={12} md={6} lg={4}>
                        <CertificationCardStyle  >
                            <Row >
                                <Col lg={12}>
                                    <GatsbyImage image={data.childImageSharp.gatsbyImageData} alt={data.fields.title} />
                                </Col>
                                <Col lg={12} >
                                    <h3>{data.fields.title}</h3>
                                    <ButtonDiv>
                                        <ButtonView href={data.fields.downloadurl} download={data.name}>
                                            Download
                                        </ButtonView>
                                        <ButtonView target="_blank" rel="noopener noreferrer" href="https://www.datacamp.com/statement-of-accomplishment/track/94b31f609cb8dfd74f9b158dcb55b4e6155fc6e5?raw=1" >
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
