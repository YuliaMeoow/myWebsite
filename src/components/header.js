import React from "react"
import { 
    Navbar, Nav, NavbarToggler, Collapse,
    NavbarBrand, NavLink, NavItem, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown 
} from 'reactstrap'

import './styles/header.css'

export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <NavbarBrand href="/main/">
                <img src={require ('./images/logo2.png')} alt="logo" style={{ width: 50 }}></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about/"> Обо мне </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret> Что я умею </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/skills/"> Навыки </DropdownItem>
                      <DropdownItem href="/qualities/"> Личные качества </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/contacts/"> Контакты </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
}