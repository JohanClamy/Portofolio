import React from "react";
import Link from "next/link";

import "../../styles/main.scss";

import auth0 from "../../services/auth0";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  );
};

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
      Login
    </span>
  );
};

const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link port-navbar-link clickable"
    >
      {" "}
      Logout{" "}
    </span>
  );
};

export default class Header extends React.Component {
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
    const { isAuthenticated, user, className } = this.props;
    return (
      <div>
        <Navbar
          color="light"
          dark
          expand="md"
          className={`port-navbar port-nav-base absolute ${className}`}
          color="transparent"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            Johan Clamy
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title={"home"} />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title={"About"} />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title={"Portfolio"} />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title={"Blog"} />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title={"Cv"} />
              </NavItem>
              {!isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
