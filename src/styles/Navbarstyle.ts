import styled from "styled-components"
import { Link } from "gatsby"

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

export { ActiveLink, Nav, NavItem, HeaderStyle }
