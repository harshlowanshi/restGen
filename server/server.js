const express = require("express")
const connectDB = require("./dbConfig/dbConfig")
const errorHandler = require("./middlewares/errorHandler")

require("dotenv").config()

const PORT = process.env.PORT || 2000
const app = express()

//connect DB
connectDB()


// body params 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// auth route
app.use("/api/auth",require("./routes/authRoute"))

app.get('/',(req,res)=>{
    res.json({
        msg:"WELCOME TO RESTGen API 1.0"
    })
})


//error handler
app.use(errorHandler)

app.listen(PORT ,()=>{
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`)
})