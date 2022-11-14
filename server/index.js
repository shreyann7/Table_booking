//express
//cors
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var md5 = require('md5');
const cors = require("cors");
app.use(cors());

/*=================================
        Database
===================================*/
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/LoginRegister", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

/************SCHEMAS*********** */
// USER SCHEMA
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, require: true, index:true, unique:true,sparse:true},
  password: String,
});
const UserModel = new mongoose.model("UserModel", userSchema);

// ADMIN SCHEMA
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

const AdminModel = new mongoose.model("AdminModel", adminSchema);

// TABLE SCHEMA
const tableSchema = new mongoose.Schema({
  firstName: String,
  date: { type: Date, default: Date.now },
  guest: {
    type: Number,
  },
});

const TableModel = new mongoose.model("TableModel", tableSchema);


/*=================================
        get and post
===================================*/
app.get("/", (req, res) => {
  res.send("App is All Good to Go!");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  UserModel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "This email id already Registered!" });
    } else {
      const user = new UserModel({
        firstName,
        lastName,
        email,
        // password,
        password: md5(password),
      });
      user.save();
      res.send({ message: "Successfully Registered :)" });
    }
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  UserModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (md5(password) == user.password) {
        res.send({ message: "Login SuccessFull :)", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "This email id is not registered" });
    }
  });
});

app.post("/admin-login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  AdminModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (md5(password) == user.password) {
        res.send({ message: "Login SuccessFull :)", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "You dont have admin access GO BACK!" });
    }
  });
});

app.post("/search", (req, res) => {
  console.log(req.body);
  const { firstName, date, guest } = req.body;

  const user = new TableModel({
    firstName,
    date,
    guest,
  });
  user.save();
  res.send({ message: "Check Availiblity in next page :)" });
});

// 



/*============================
        listen
=============================*/
app.listen(8080, () => {
  console.log("Server is runing at port 8080");
});
