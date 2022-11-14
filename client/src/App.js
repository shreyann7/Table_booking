import React, { useState } from "react";
import Main from "./components/main";
import Navbar from "./components/navbar"; 
import Book from "./components/book";
import Login from "./components/login";
import Register from "./components/register"
import Search from "./components/search";
import Payment from "./components/payment";
import Thankyou from "./components/thankyou";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./ContextApi";
import Admin from "./components/admin";
import AdminPannel from "./components/admin-pannel";
import NoTable from "./components/no-table";

export default _ => {
  // const [page, setPage] = useState(0);
  const [userdata,setUserData] = useState({})

  return (
    <div>
      {/* <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <Login setPage={setPage} /> : null}
      {page === 3 ? <Register setPage={setPage} /> : null}
      {page === 4 ? <Search setPage={setPage} />: null}
      {page === 5 ? <Payment setPage={setPage} />: null}
      {page === 6 ? <Thankyou setPage={setPage} />: null} */}
      <data.Provider value={{userdata,setUserData}}>
        <Router>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/book"  element={userdata && userdata._id ? <Book /> : <Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/thankyou" element={<Thankyou/>}/>
            <Route path="/admin" element={<Admin/>} />
            <Route path="/admin-pannel" element={userdata && userdata._id ? <AdminPannel /> : <Admin/>} />
            <Route path="/no-table" element={<NoTable/>} />
          </Routes>
        </Router>
      </data.Provider>
      

    </div>
  );
};

