require('dotenv').config();
const express= require('express');
const app=express();
const cors=require('cors');
const body=require('body-parser');
const path = require('path');

const home=require('./src/routes/home.js');
const routes=require('./src/routes/routes.js');

app.use(cors());
app.use(body.json());
app.use(body.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname,'dist')));

app.use('/',home);
app.use('/api/',routes);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started");
})

module.exports=app;

