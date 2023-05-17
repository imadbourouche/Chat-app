const express=require('express')
const morgan=require('morgan')
const path=require('path')

const app=express()
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

var publicFilePath=path.join(__dirname+'/public')
app.get('/',(req,res)=>{
    res.status(200).sendFile(publicFilePath+'/index.html');
})

module.exports=app
