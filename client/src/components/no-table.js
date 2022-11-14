import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

export default (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <center>
        <h2>Sorry! <span role="img" aria-label="sheep">😵</span></h2>
      </center>

      <center>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img
            alt="Sample"
            src="https://images.unsplash.com/photo-1535938995-b63df88b6c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <CardBody>
            <CardTitle tag="h5">No Table Available</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              All Tables are full.
            </CardSubtitle>
            <CardText>
              we are Sorry to inform that at this point of time there is no table available in the restaurant.
            </CardText>
            <Button onClick={() => navigate("/")}>Go back</Button>
          </CardBody>
        </Card>
      </center>
    </div>
  );
};
