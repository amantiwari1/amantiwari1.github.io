import React from "react"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { Avatar, Header, Name, Topic, Content, Card, HomeHeader } from "../styles/Homestyle"
import Education from "../components/education"
import Skills from "../components/Skills"
const { HomeData } = require("../data.ts")



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "aman.png" }) {
        childImageSharp {
        gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: COVER, cropFocus: CENTER}, width: 260, height: 300)
        }
      }
    }
  `)

  return (
    <>
      <Row>

      <HomeHeader>

      </HomeHeader>
      </Row>
      <Row>


        <Col>
          <Header>
            <Avatar image={data.file.childImageSharp.gatsbyImageData} alt="aman photo" />

            <div>
              <Name>
                Aman Tiwari
                <br />
                Full Stack Developer
              </Name>
            </div>
          </Header>
        </Col>

      </Row>
      <Row>
        <Col>
          <Card>
            <Topic>About me</Topic>
            <Content>
              {HomeData.aboutme}
            </Content>
            <Topic>Education</Topic>
            <Content>
              <Education />
            </Content>
            <Topic>Skills</Topic>
            <Content>
              <Skills />
            </Content>
          </Card>
        </Col>
      </Row>
      <Row>
      </Row>
    </>
  )
}
export default IndexPage
