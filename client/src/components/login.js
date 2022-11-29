import React, { useContext, useState } from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit'; 
import axios from 'axios'
import data from '../ContextApi';
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar';
import { Button } from 'reactstrap';

export default props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
})

const {setUserData} = useContext(data)

const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
        return {
            ...preve,
            [name]: value
        }
    })
}

const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:8080/login", user)
  .then((res) => {
    alert(res.data.message)
    setUserData(res.data.user)
                navigate("/book")
})
}

    return(
      <div>
      <MDBContainer fluid className="p-3 my-5 h-custom">
  
        <MDBRow>
  
          <MDBCol col='10' md='5'>
            <img src={require('../images/side.jpg')} class="img-fluid" alt="Sample image" />
          </MDBCol>
  
          <MDBCol style={{padding:20}} col='4' md='6'>
  
            <div className="d-flex flex-row align-items-center justify-content-center">
  
              <p style={{padding:10}} className="lead fw-normal mb-0 me-3"><h5>Login</h5></p>
            </div>
  
            <MDBInput wrapperClass='mb-4' label='Email address' type="email" id="email" name='email' value={user.email} onChange={handleChange}  size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Password' type="password" id="password" name='password' value={user.password} onChange={handleChange} size="lg"/>
  
            <div className='text-center text-md-start mt-4 pt-2'>
            {/* onClick={_ => {
              props.setPage(1);
            }}  */}
              {/* <MDBBtn onClick={handleSubmit} className="mb-0 px-5" size='lg'>Login</MDBBtn> */}
              <Button color="primary" onClick={handleSubmit}>Login</Button>

              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a onClick={()=>navigate("/register")} className="link-danger">Register</a></p>
            </div>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer></div>
    )
  };