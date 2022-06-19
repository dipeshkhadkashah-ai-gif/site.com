require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors"); //cross connection 
const connection = require("./db");
const path = require("path");

// Importing Routes
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bookingRoutes=require('./routes/booking');
const contactRoutes=require("./routes/contactRoute");


//Connecting to Database
connection();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/booking',bookingRoutes);
app.use("/api/contact", contactRoutes);




const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
