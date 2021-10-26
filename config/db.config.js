'use strict';

const mysql =require('mysql');

//db connection
const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'API'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log("Db connected");
});
module.exports=dbConn;