import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import navbar from "../index.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Navbar fixed="top">
          <Navbar.Brand href="search">
            Suhail's Motorway Information Query
          </Navbar.Brand>
          <Nav.Item>
            <Nav.Link href="search">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="help">Help</Nav.Link>
          </Nav.Item>
        </Navbar>
      </nav>
    );
  }
}
