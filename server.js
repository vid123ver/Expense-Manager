// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const dotenv = require('dotenv');
// const colors = require('colors');
// const connectDb = require('./config/connectDb');
// const userRoutes = require('./routes/userRoute'); // Import the route

// //config dot env file
// dotenv.config(); 
// //database call
// connectDb();
// //reset object
// const app = express();

// // middleware to log incoming requests
// app.use((req, res, next) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     next();
// });
// //middlewares
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(cors());
// // Use the routes
// app.use('/app/user', userRoutes);

// //routes
// app.get('/' , (req , res)=>{
//     res.send("<h1>Hello from sever</h1>");
// })

// //port
// const PORT = 8080 || process.env.PORT

// //listen
// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// })
 
// app.use((req, res, next) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     next();
// });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});