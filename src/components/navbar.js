import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderStyle = styled.nav`
  overflow: hidden;
  background-color: #333;
`

const Nav = styled.ul`
  list-style-type: none;
  padding: 9px 0px;
  text-align: right;
`

const NavItem = styled(Link)`
  display: inline;
  color: white;
  padding: 9px 17px;
  text-decoration: none;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`

const ActiveLink = {
    color: "blue",
} 

const Navbar = ({ theme }) => {
  return (
    <Container>
      <HeaderStyle></HeaderStyle>
      <HeaderStyle>
        <Nav>
          <NavItem activeStyle={ActiveLink} to="/">Home</NavItem>
          <NavItem activeStyle={ActiveLink} to="/Contact">Contact</NavItem>
          <NavItem activeStyle={ActiveLink} to="/Resume">Resume</NavItem>
          <NavItem activeStyle={ActiveLink} to="/Project">Project</NavItem>
          <button onClick={theme}>Switch Theme</button>
        </Nav>
      </HeaderStyle>

      <HeaderStyle></HeaderStyle>
    </Container>
  )
}

export default Navbar
