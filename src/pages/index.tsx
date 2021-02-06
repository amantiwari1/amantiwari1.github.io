import React from "react"
import { Col, Row } from "react-bootstrap"
import { Avatar, Header, Name, Topic, Content, Card, HomeHeader } from "../styles/Homestyle"
import Education from "../components/education"
import Skills from "../components/Skills"
const { HomeData } = require("../data.ts")
import { StaticImage } from "gatsby-plugin-image"





const IndexPage = () => {
  return (
    <>
      <Row>
      <HomeHeader>
        <h1>Hello, I am Aman Tiwari</h1>
      </HomeHeader>
      </Row>
      
      
      <Row>
        <Col>
          <Header>
            <Avatar >
            <StaticImage class="avatar" src="../images/aman.png" alt="aman photo" width={260} height={300} placeholder="blurred" />
            </Avatar>
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
