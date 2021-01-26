import React from "react"
import Coding from "../images/coding"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
        <Col
      
          md={12}
          lg={8}
        >
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
