import React from "react"
import { Coding } from "../images/coding"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { Avatar, Header, Name, Topic } from "../styles/Homestyle"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "aman.png" }) {
        childImageSharp {
          fixed(height: 300, width: 260) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Row>
        <Col md={12} lg={4}>
          <Header>
            <Avatar fixed={{ ...data.file.childImageSharp.fixed }} />
            <Name
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <span role="img" aria-label="Hi">
                👋
              </span>{" "}
              Hello,
              <br /> I am Aman Tiwari
            </Name>
          </Header>
        </Col>
        <Col md={12} lg={8}>
          <Coding />
        </Col>
      </Row>
      <Row>
        <Col>
          <Topic>Summary</Topic>
          <Coding />
          <Coding />
        </Col>
      </Row>
    </>
  )
}
export default IndexPage
