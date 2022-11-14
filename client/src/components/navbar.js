import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { redirect, useNavigate } from "react-router-dom";

export default (props) => {
  const navigate = useNavigate();

  return (
    <div style={{margin:0 , padding:0}} >
      <Navbar color="dark" dark>
        <NavbarBrand className="nav-brand" onClick={() => navigate("/")}>
          <img
            alt="logo"
            src={require("../images/logo.png")}
            style={{
              height: 40,
              width: 40,
            }}
          />
          
          Restaurant
        </NavbarBrand>
        <NavLink style={{ color: "white" }} onClick={() => navigate("/login")}>
          Login/Register
        </NavLink>
      </Navbar>
      {/* <Navbar color="light" light expand="md">
          <NavbarBrand
            className="nav-brand"
            onClick={()=>navigate("/")}
          >
            Restaurant
          </NavbarBrand>
          <NavLink onClick={()=>navigate("/login")}>Login/Register</NavLink>     

        </Navbar> */}
    </div>
  );
};
