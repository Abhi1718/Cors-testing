const express = require("express")
const cors = require('cors');
const app = express()
const port = 8000

app.use(
  cors({
  origin: '*',
  methods:["GET","PUT"]
})
)
  app.get('/sample', function (req, res) {
    res.send({name:"Abhishek is a good programmer",role:"Good programmer",experiencr:"excellent"})
  })
app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})
