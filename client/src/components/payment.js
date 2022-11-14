import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

export default (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <center>
        <Navbar />
        <h1>Pay Now</h1>
        <Button onClick={() => navigate("/thankyou")} color="primary" outline>
          Pay via UPI
        </Button>
        <div>
        <img src="https://www.wix.com/tools/qr-code-generator/_functions/svg/250/000/fff/aHR0cHMlM0ElMkYlMkZ3d3cudGVsaW9sYWJzLmNvbSUyRg==" alt="QR-Code" width="500" height="600"></img>
        </div>
      </center>
    </div>
  );
};
