const express=require("express")
const dotenv=require("dotenv").config()
const cors=require("cors")
const connect=require("./config/db")
const router = require("./routes/userRouter")

const app=express()

app.use(express.json())
app.use(cors())
const PORT=process.env.PORT||8000

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.use("/",router)

app.listen(PORT,async()=>{
 await connect()
    console.log(`http://localhost:${PORT}`)
})