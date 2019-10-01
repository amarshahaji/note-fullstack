const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createConnection(config)
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());

const port = 4000;


connection.connect(function(err){
    if(!err)
        console.log("connection is successfull");
    else
        console.log("connection is in problem");
});


// connection.query('select * from usernotes where id=3',function(err,result){
//     console.log(result);
// });

app.get('/',(req,res)=>{
    connection.query('select note from usernotes where id=?',[3],function(err,result){
       res.send(JSON.stringify(result))
        console.log(result)
    })
  })

app.listen(port,()=>{
    console.log("server is running on port:",port)
})