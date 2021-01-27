import React from "react"
import { Container } from "react-bootstrap"
import { ActiveLink, Nav, NavItem, HeaderStyle } from "../styles/Navbarstyle"

const Navbar = ({ theme }) => {
  return (
    <HeaderStyle>
      <Container>
        <Nav>
          <NavItem activeStyle={ActiveLink} to="/">
            Home
          </NavItem>
          <NavItem activeStyle={ActiveLink} to="/contact">
            Contact
          </NavItem>
          <NavItem activeStyle={ActiveLink} to="/Resume">
            Resume
          </NavItem>
          <NavItem activeStyle={ActiveLink} to="/Project">
            Project
          </NavItem>
          <button onClick={theme}>Switch Theme</button>
        </Nav>
      </Container>
    </HeaderStyle>
  )
}

export default Navbar
