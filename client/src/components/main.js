import React from "react";
import { Row, Col, Button, Badge , h1 , h2 , h3 } from "reactstrap";
import Navbar from "./navbar";
import { useNavigate } from 'react-router-dom'

export default props => {
    const navigate = useNavigate()

    return (
      <div >
      <Navbar />
        <Row noGutters className="text-center align-items-center pizza-cta">
          <Col>
            <p style={{padding:35}}>
              {/* Welcome , to TATVA by Taj */}
              <h3>
            Welcome to, TATVA {' '}
              <Badge>
              by Taj
              </Badge>
          </h3>
            </p>
            <Button
              onClick={()=>navigate("/login")} style={{margin:17 , padding:10}}
            >
              Book a Table
            </Button>
          </Col>
        </Row>
        <Row noGutters className="text-center big-img-container">
          <Col>
            <img
              src={require("../images/cafe.jpg")}
              alt="cafe"
              className="big-img"
              width={1000}
            />
          </Col>
        </Row>
      </div>
    );
  };