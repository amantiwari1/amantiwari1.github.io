import React from "react"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { Avatar, Header, Name, Topic, Content, Card } from "../styles/Homestyle"
import Education from "../components/education"
import Skills from "../components/Skills"

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
        <Col>
          <Header>
            <Avatar fixed={data.file.childImageSharp.fixed} />

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
              Hello !! My name is Aman Tiwari. I'm a full stack web developer
              who is passionate about various web technologies. I like to
              experiment with different web technologies. I have an experience
              of nearly 3 months working with MERN stack and Gatsbyjs. Building
              fancy UI's just like this one that your seeing 😅 and writing
              blogs about tech stacks is what Aman loves to do. Check my blog
              which I update every week for some Javascript and some cool notes
              on web technologies.
              <br />
              <br />
              Currently I work mostly with Javascript technologies like ReactJS
              and GatsbyJS. I also have hands on experience working with cloud
              infrastructures like AWS/GCP and have deployed applications
              keeping scalability in mind. Docker, Kubernetes, Jenkins, Github
              Actions are some of the cool tools I use for CI/ CD. I'm always a
              learner and a self taught programmer.
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
