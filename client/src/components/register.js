import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "reactstrap";
import Navbar from "./navbar";

export default (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { firstName, lastName, email, password } = user;
    if (firstName && lastName && email && password) {
      await axios.post("http://localhost:8080/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Enter the Required Fields");
    }
  };

  return (
    <div style={{margin:0 , padding:0}}>
      <Navbar />
      <MDBContainer fluid>
        <div
          className="p-0 bg-image"
          style={{
            backgroundImage:
              "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
            height: "250px"
          }}
          // style={{
          //   backgroundImage:
          //     "url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          //   height: "300px",
          // }}
        ></div>

        <MDBCard
          className="mx-5 mb-5 p-0 shadow-5"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="p-5 text-center">
            <h2 className="fw-bold mb-5">Register now</h2>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-2"
                  // wrapperClass="mb-4"
                  label="First Name"
                  type="text"
                  id="firstname"
                  onChange={handleChange}
                  name="firstName"
                  value={user.firstName}
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-2"
                  // wrapperClass="mb-4"
                  label="Last name"
                  type="text"
                  id="lastname"
                  onChange={handleChange}
                  name="lastName"
                  value={user.lastName}
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
            wrapperClass="mb-2"
              // wrapperClass="mb-4"
              label="Email"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <MDBInput
            wrapperClass="mb-2"
              // wrapperClass="mb-4"
              label="Password"
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />

      <Button color="primary" onClick={handleSubmit}>Register</Button>

            {/* <MDBBtn className="w-600 mb-6 " size="md" onClick={handleSubmit}>
              Register
            </MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};
