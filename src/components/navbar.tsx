import React from "react"
import { Container } from "react-bootstrap"
import { NavItem, HeaderStyle, Div } from "../styles/Navbarstyle"




interface NavbarProps {
  theme: any;
}

const Navbar = (props: NavbarProps) => {

  const { theme } = props




  const [checked, setChecked] = React.useState(false)
  const handleClick = () => setChecked(!checked)
  return (
    <HeaderStyle>
      <Container>
        <Div>

          <nav>
            <div className="space-around">
              <div className="logo">
                <i className="fas fa-laptop-code"></i>
              </div>

              <div className="darkorlight">
                <input type="checkbox" id="click1" />
                <label htmlFor="click1" className="dark-mode">
                  <i onClick={theme} className="fas fa-sun" ></i>
                </label>
              </div>
            </div>

            <input type="checkbox" checked={checked} id="click" />
            <label htmlFor="click" onClick={handleClick} className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <ul>




              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/">Home</NavItem></li>
              <li ><NavItem activeClassName="activelink" onClick={handleClick} to="/contact">Contact</NavItem></li>
              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/project">Project</NavItem></li>
              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/timeline">Timeline</NavItem></li>


            </ul>


          </nav>
        </Div>
      </Container>
    </HeaderStyle>
  )
}

export default Navbar
