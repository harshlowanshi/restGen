const express = require("express")
const connectDB = require("./dbConfig/dbConfig")
const errorHandler = require("./middlewares/errorHandler")
const cors =require("cors")

require("dotenv").config()

const PORT = process.env.PORT || 2000
const app = express()

//connect DB
connectDB()

//proxy set 
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://rest-gen.vercel.app"   
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// body params 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// auth route
app.use("/api/auth",require("./routes/authRoute"))

// data route
app.use("/api",require("./routes/dataRoute"))

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