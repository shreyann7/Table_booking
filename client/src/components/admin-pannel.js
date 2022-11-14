import React , {useState, useContext} from "react";
import { Card , CardBody , CardTitle , CardSubtitle , CardText , Button } from "reactstrap";
import data from "../ContextApi";
import { useNavigate } from "react-router-dom";


export default (props) => {
  
  const {userdata,setUserData} = useContext(data)
  const navigate = useNavigate()

  const logout = ()=>{
    setUserData({})
  }

  return (
    <div>
      <center> <h1>
        Welcome admin
      </h1>
      <h6>Bookings for Today</h6>
      </center>
      <center>
        <div style={{padding:40}}>
        <Card>
        <CardBody>
          <CardTitle>Table Booked</CardTitle>
          <CardSubtitle>Host: User1</CardSubtitle>
          <CardText>
            Date : 12/07/2022 Time 5:00pm
            Guests : 2
          </CardText>
          <Button>Delete / Clear</Button>
        </CardBody>
        </Card>
      
        <Card>
        <CardBody>
          <CardTitle>Table Booked</CardTitle>
          <CardSubtitle>Host: User2</CardSubtitle>
          <CardText>
            Date : 12/07/2022 Time 5:00pm
            Guests : 5
          </CardText>
          <Button>Delete / Clear</Button>
        </CardBody>
      </Card>

        <Card>
        <CardBody>
          <CardTitle>Table Booked</CardTitle>
          <CardSubtitle>Host: Saatvik</CardSubtitle>
          <CardText>
            Date : 12/07/2022 Time 5:00pm
            Guests : 8
          </CardText>
          <Button>Delete / Clear</Button>
        </CardBody>
      </Card>
    
      <Button style={{margin:20}}onClick={logout}>Logout</Button>

        </div>
      </center>
      
    </div>
  );
};
