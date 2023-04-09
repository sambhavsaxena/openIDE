import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ marginLeft: "30px" }}>
      <Nav className="justify-content-center my-4">
        <Nav.Item>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            HOME
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={"/ide"}
            style={{ textDecoration: "none", marginLeft: "4vw" }}
          >
            IDE
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", marginLeft: "4vw" }}
          >
            ABOUT
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
