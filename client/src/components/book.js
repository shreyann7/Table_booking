import React, {useState, useContext } from "react";
import { Button, Card ,Form, FormGroup, Label, Input, rSelected,ButtonGroup, setRSelected, FormText , DropdownItem , DropdownToggle , UncontrolledDropdown, DropdownMenu} from 'reactstrap';
import data from "../ContextApi";
import { useNavigate } from 'react-router-dom'
import Navbar from "./navbar";
import axios from "axios";

export default props => { 
  const {userdata,setUserData} = useContext(data)
  const navigate = useNavigate()
  const [user , setUser] = useState({
    firstName : "", 
    date : "",
    guest : "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   const { date, guest } = user;
  //     await axios.post("http://localhost:8080/search", user).then((res) => {
  //       alert(res.data.message);
  //       navigate("/search");
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const {firstName , date , guest } = user;
    if (date && guest) {
      await axios.post("http://localhost:8080/search", user).then((res) => {
        alert(res.data.message);
        navigate("/search");
      });
    } else {
      alert("Enter the Required Fields");
    }
  };

  
  const logout = ()=>{
    setUserData({})
  }


  return (
    <div>
    <Navbar/>
      <h1>Booking Menu</h1>
      <h2>
        Hii Welcome {userdata.firstName} {userdata.lastName}
      </h2>
      <div>
        
        <FormGroup>

          <Label for="exampleEmail">Enter Host Name</Label>
          <Input name="firstName" id="firstName"
                  onChange={handleChange}
                  value={user.firstName} />

          <Label for="exampleDate"><h5>Date-Time</h5></Label>
          <Input type="date" name="date" id="date"
                  onChange={handleChange}
                  value={user.date} placeholder="date placeholder" />
        
        </FormGroup>

      </div>

      <div>
      
      <FormGroup>
          <Label for="guest"><h5>Number of Guests</h5></Label>
          <Input type="select" name="guest" id="guest" onChange={handleChange} value={user.guest}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>

          </Input>
        </FormGroup>
      
    </div>

    <div style={{padding:19}}>
      <Button   onClick={handleSubmit} variant="outline-primary">Search</Button>{' '}


      <Button onClick={logout} variant="outline-primary">Logout</Button>{' '}
    </div>


    </div>
  );
};
