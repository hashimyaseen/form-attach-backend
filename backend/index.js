
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const arr=[];

app.post("/admin",(req,res)=>{
  arr.push(req.body)
  console.log(req.body)
  res.send(req.body)

})

app.get('/sd',(req,res)=>{
  res.send(arr)
})


app.listen(5000,()=>{
  console.log("Server Running on 5000")
})
