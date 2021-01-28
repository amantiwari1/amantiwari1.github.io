import styled from "styled-components"
import { Link } from "gatsby"

const HeaderStyle = styled.div`
  overflow: hidden;
  background-color: #1b1b1b;
`

const Nav = styled.ul`
  list-style-type: none;
  text-align: right;
`

const NavItem = styled(Link)`
  color: ${props => props.theme.text};
  

  display: inline;
  text-decoration: none;
  z-index: 3 !important;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 5px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.mainColor};
    background: ${props => props.theme.text};
  }

  @media (max-width: 920px) {
    z-index: 3 !important;
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:hover {
      background: none;
      color: cyan;
    }
  }
`



const Div = styled.div`
  .space-around {
    justify-content: space-between;
    display: flex;
    width: 100%;
    margin-right: 20px;
  }
  z-index: 3 !important;

  #click1:checked ~ .dark-mode i:before {
    content: "\f186";
    
    
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3 !important;
    display: flex;
    height: 60px;
    width: 100%;
    background: ${props => props.theme.mainColor};
    color: ${props => props.theme.text};
    justify-content: space-around;
    -webkit-box-shadow: 0 4px 6px -4px #222;
    -moz-box-shadow: 0 4px 6px -4px #222;
    box-shadow: 0 4px 6px -4px #222;

    padding: 0 50px 0 100px;
  }
  nav .logo {
    color: ${props => props.theme.text};
    font-size: 30px;
    font-weight: 600;
    margin-top: 10px;
  }
  nav .darkorlight {
    margin-top: 15px;
    color: ${props => props.theme.text};
    font-size: 20px;
    font-weight: 500;
  }
  nav ul {
    z-index: 3 !important;
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
  }
  nav ul li {
    z-index: 3 !important;
    margin: 15px 5px;

  }

  nav .menu-btn i {
    color: ${props => props.theme.text};
    z-index: 3 !important;
    margin-right: 20px;
    margin-top: 10px !important;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    display: none;
  }
  
  input[type="checkbox"] {
    z-index: 3 !important;
    display: none;
  }

  @media (max-width: 1000px) {
    nav {
      z-index: 3 !important;
      padding: 0 10px 0 10px;
    }

    nav .menu-btn i {
      padding-top: 10px !important;

      color: ${props => props.theme.text};
      display: block;
    }
    #click:checked ~ .menu-btn i:before {
      padding-top: 10px !important;
      padding-left: 4px;
      color: ${props => props.theme.text};
      content: "\f00d";
    }

    nav ul {
      position: fixed;
      top: 60px;
      left: -100%;
      background: ${props => props.theme.mainColor};
      height: 100vh;
      width: 100%;
      text-align: center;
      display: block;
      transition: all 0.3s ease;
    }
    #click:checked ~ ul {
      left: 0;
    }
    nav ul li {
      width: 100%;
      margin: 40px 0;
    }

    #click:checked ~ ul li a {
      margin-left: 0px;
    }
  }

  .activelink {
    text-decoration: none;
    color: ${props => props.theme.mainColor};
    background: ${props => props.theme.text};

    @media (max-width: 920px) {
      background: none;
      color: cyan;
  }
  }
`

export {  Nav, NavItem, HeaderStyle, Div }
