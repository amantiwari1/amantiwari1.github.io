import React from "react"
import Coding from "../images/coding"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"

const Header = styled.div`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 80px;
`

const Name = styled.p`
      font-size: 30px;
      font-weight: 700;
      font-family: Comic Sans MS;


`
const IndexPage = () => (
  <Row>
    <Col md={12} lg={6}>
      <Header>
        <Name>
          👋 Hello,
          <br /> I am Aman Tiwari
        </Name>
      </Header>
    </Col>
    <Col md={12} lg={6}>
      <Coding />
    </Col>
  </Row>
)

export default IndexPage
