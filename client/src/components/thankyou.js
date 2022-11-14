import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import Navbar from "../components/navbar";
import data from "../ContextApi";
import { useContext } from "react";

export default _ => {
  const navigate = useNavigate();
  const {userdata,setUserData} = useContext(data)
  const logout = ()=>{
    setUserData({})
    navigate("/")
  }

  return (
    <div>
    <Navbar/>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <i className="fas fa-pizza-slice thank-you-pizza"></i>
          <p className="thanks-subtext">
            You should receive an email with the details of your reservation.
          </p>
          <Button
              onClick={logout}
            >
              Home
            </Button>
        </Col>
      </Row>
    </div>
  );
};
