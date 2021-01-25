import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "react-bootstrap";

const HeaderStyle = styled.nav`
  overflow: hidden;
  background-color: #333;
`

const Nav = styled.ul`
  list-style-type: none;
  text-align: right;
  margin-top: 10px;
`

const NavItem = styled(Link)`
  display: inline;
  color: white;
  padding: 0px 17px;
  text-decoration: none;
`



const ActiveLink = {
    color: "blue",
} 

const Navbar = ({ theme }) => {
  return (
    <HeaderStyle>
          <Container>
        <Nav>

          <NavItem activeStyle={ActiveLink} to="/">Home</NavItem>
          <NavItem activeStyle={ActiveLink} to="/contact">Contact</NavItem>
          <NavItem activeStyle={ActiveLink} to="/Resume">Resume</NavItem>
          <NavItem activeStyle={ActiveLink} to="/Project">Project</NavItem>
          <button onClick={theme}>Switch Theme</button>
        </Nav>
          </Container>
      </HeaderStyle>

  )
}

export default Navbar
