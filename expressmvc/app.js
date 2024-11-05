
const express = require('express')
const path =  require("path")
const employeeRouter = require("./routes/employeeRoutes")
const webEmployeeRouter  = require("./routes/empRoutes")
// creating express app 
const app = express()
// setting view engine
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))



app.use(express.json())
app.use("/api/v1/employees",employeeRouter)
app.use("/web/employees",webEmployeeRouter)


module.exports=app