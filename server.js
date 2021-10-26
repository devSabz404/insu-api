const express = require('express');

const bimaRoutes = require("./src/routes/bima.routes");

//create express app
const app = express();

//setup server port
const port = process.env.PORT || 5000;

//parse requests of content-type -application / x-wwww-form-urlencoded
app.use(express.urlencoded({extended:true}));

//parse requests of content-type -application/json
app.use(express.json());

//define a root route
app.get('/',(req,res)=>{
    res.send("Responsivr");
});


//Require routes



//use as middleware
app.use('/api/v1/bima',bimaRoutes)




//listen for requests
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})