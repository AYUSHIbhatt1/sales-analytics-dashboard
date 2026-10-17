let express= require('express');
const cors = require("cors");
let orderRouter=require('../routes/orderroutes')
const dashboardroutes=require('../routes/dashboardRoutes')
require("dotenv").config();
let app=express();
app.use(cors());
app.use(express.json());
app.use('/api/order',orderRouter);
app.use('/api/dashboard',dashboardroutes);
module.exports=app