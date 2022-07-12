import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {useState} from "react";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar
        color="dark"
        expand="md"
        dark>
        <NavbarBrand href="/">
          NASE ASM
        </NavbarBrand>
        <NavbarToggler
          className="me-2"
          onClick={() => {toggle()}}
        />
        <Collapse navbar isOpen={isOpen}>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink herf="/about/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Github
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            NASE(siNgle Accumulator-based SimplE) Assembler
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar;