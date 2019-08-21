import React from 'react'
import { 
    Navbar, Nav, NavbarToggler, Collapse,
    NavbarBrand, NavLink, NavItem
} from 'reactstrap'
import { scroller, animateScroll } from 'react-scroll';
import './styles/header.css'

function scroll(name) {
  scroller.scrollTo(name, {
    duration: 1500,
    smooth: true,
    offset: -75,
  })
}

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
      const navs = [
        {
          name: 'about',
          title: 'Обо мне',
        },
        {
          name: 'skills',
          title: 'Что я умею',
        },
        {
          name: 'qualities',
          title: 'Личные качества',
        },
        {
          name: 'contacts',
          title: 'Контакты',
        },
      ]
      return (
        <div>
          <Navbar className='navbar navbar-expand-md bg-dark navbar-dark fixed-top'>
            <NavbarBrand onClick={animateScroll.scrollToTop}>
                <img src={require ('./images/logo2.png')} alt="logo" style={{ width: 50 }}></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {navs.map((nav, i) => {
                  return <NavItem key={i}>
                    <NavLink onClick={() => scroll(nav.name)}>{nav.title}</NavLink>
                  </NavItem>
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
}