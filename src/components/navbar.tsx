import React from "react"
import { Container } from "react-bootstrap"
import { NavItem, HeaderStyle, Div, FontAwesomeIconStyle } from "../styles/Navbarstyle"
import { faHome, faIdCard, faProjectDiagram, faClock, faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby";



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
              <Link style={{color: "inherit"}}to="/">  <i className="fas fa-laptop-code"></i> </Link>
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
            <ul >

              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/"> <FontAwesomeIconStyle icon={faHome} /> Home  </NavItem></li>
              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/project"><FontAwesomeIconStyle icon={faProjectDiagram} /> Project</NavItem></li>
              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/timeline"><FontAwesomeIconStyle icon={faClock} /> Timeline</NavItem></li>
              <li><NavItem activeClassName="activelink" onClick={handleClick} to="/Certification"><FontAwesomeIconStyle icon={faClock} /> Certification</NavItem></li>
              <li ><NavItem activeClassName="activelink" onClick={handleClick} to="/contact"><FontAwesomeIconStyle icon={faIdCard} /> Contact</NavItem></li>



            </ul>


          </nav>
        </Div>
      </Container>
    </HeaderStyle>
  )
}

export default Navbar
